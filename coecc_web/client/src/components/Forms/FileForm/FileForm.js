import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import FileBase from "react-file-base64";
import "./FileForm.css";
import { useDispatch } from "react-redux";
import { createFile, updateFile } from "../../../actions/file";
import { useSelector } from "react-redux";

const FileForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const file = useSelector((state) =>
    currentId ? state.file.find((p) => p._id === currentId) : null
  );
  const [fileData, setFileData] = useState({
    fileName: "",
    fileType: "-",
    fileTitle: "",
    fileDescription: "",
    fileItself: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (file) setFileData(file);
  }, [file]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateFile(currentId, { ...fileData, name: user?.result?.name })
      );
    } else {
      dispatch(createFile({ ...fileData, name: user?.result?.name }));
    }
    clear();
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFileData({ ...fileData, [name]: value });
  };

  const clear = () => {
    setCurrentId(null);
    setFileData({
      fileName: "",
      fileType: "-",
      fileTitle: "",
      fileDescription: "",
      fileItself: "",
    });
  };

  if (!user?.result?.name) {
    return ( null );
  }

  return (
    <div>
      <Form onSubmit={submitHandler} className={"form"}>
        <h4>{currentId ? "Edit" : "Create"} File</h4>
        <h3>--------------</h3>
        <FormGroup>
          <Label tag="h7" for="fileName">
            File Name
          </Label>
          <Input
            type="text"
            bsSize="sm"
            id="fileName"
            name="fileName"
            value={fileData.fileName}
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label tag="h7" for="fileType">
            File Type
          </Label>
          <Input
            type="select"
            bsSize="sm"
            id="fileType"
            name="fileType"
            value={fileData.fileType}
            onChange={changeHandler}
          >
            <option>-</option>
            <option>Text</option>
            <option>Folder</option>
            <option>Audio</option>
            <option>Video</option>
            <option>Other</option>

          </Input>
        </FormGroup>

        <FormGroup>
          <Label tag="h7" for="fileTitle">
            Title
          </Label>
          <Input
            type="text"
            bsSize="sm"
            id="fileTitle"
            name="fileTitle"
            value={fileData.fileTitle}
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label tag="h7" for="fileDescription">
            Description
          </Label>
          <Input
            type="textarea"
            bsSize="sm"
            id="fileDescription"
            name="fileDescription"
            value={fileData.fileDescription}
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label tag="h7" for="fileItself">
            File
          </Label>
          <FileBase
            type="file"
            multiple={false}
            id="fileItself"
            name="fileItself"
            value={fileData.fileItself}
            onDone={({ base64 }) =>
              setFileData({ ...fileData, fileItself: base64 })
            }
          />
        </FormGroup>

        <Button type="submit" color="primary" className={"button"}>
          Create
        </Button>
        <Button color="danger" className={"button"} onClick={clear}>
          Clear
        </Button>
      </Form>
    </div>
  );
};

export default FileForm;
