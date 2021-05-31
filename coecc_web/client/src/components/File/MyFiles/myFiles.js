import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
} from "reactstrap";
import "./myFiles.css";
import { useDispatch } from "react-redux";
import { deleteFile } from "../../../actions/file";
import { Link, useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { FaRegTrashAlt, FaThumbsUp, FaEdit } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState, useEffect } from "react";

import decode from "jwt-decode";

import alertify from "alertifyjs";

const File = ({ file, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
    alertify.alert("Succesful", "Successfully logged out.");
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const submit = () => {
    confirmAlert({
      title: "Deleting File",
      message: "Are you sure?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteFile(file._id)),
        },
        {
          label: "No",
          onClick: () => () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <div>
      <CardGroup className={"cardGroup"}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{file.fileName}</CardTitle>

            <CardTitle className={"name"} tag="h8">
              {file.name}
            </CardTitle>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
              <Link
                className={"paragraf"}
                to="/fileDetails"
                onClick={() => setCurrentId(file._id)}
              >
                Details
              </Link>
            </CardSubtitle>
            <CardText>{file.fileTitle}</CardText>
            <CardText>{moment(file.createdAt).fromNow()}</CardText>

            {(user?.result?.googleId === file?.creator ||
              user?.result?._id === file?.creator) && (
              <FaRegTrashAlt
                className={"different"}
                onClick={() => dispatch(submit)}
              >
                Delete
              </FaRegTrashAlt>
            )}

            {(user?.result?.googleId === file?.creator ||
              user?.result?._id === file?.creator) && (
              <FaEdit
                className={"different"}
                onClick={() => setCurrentId(file._id)}
              >
                Update
              </FaEdit>
            )}
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default File;
