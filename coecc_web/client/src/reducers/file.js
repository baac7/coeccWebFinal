import {FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (files = [], action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...files, action.payload];
        case UPDATE:
            return files.map((file) => file._id === action.payload._id ? action.payload : file);
        case DELETE:
            return files.filter((file) => file._id !== action.payload);    
        default:
            return files;
    }
}