import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/index.js";
import alertify from "alertifyjs";

export const getFile = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFile();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createFile = (file) => async (dispatch) => {
  try {
    const { data } = await api.createFile(file);

    dispatch({ type: CREATE, payload: data });
    alertify.alert("Succesful", "The file has been created successfully.");
  } catch (error) {
    alertify.alert("Error", "The file could not be created.");
  }
};

export const updateFile = (id, file) => async (dispatch) => {
  try {
    const { data } = await api.updateFile(id, file);
    dispatch({ type: UPDATE, payload: data });
    alertify.alert("Succesful", "The file has been updated successfully.");
  } catch (error) {
    alertify.alert("Error", "The file could not be updated.");
  }
};

export const deleteFile = (id) => async (dispatch) => {
  try {
    await api.deleteFile(id);

    dispatch({ type: DELETE, payload: id });
    alertify.alert("Successful", "The file deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
