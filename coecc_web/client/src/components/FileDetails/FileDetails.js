import React from "react";

import { useSelector } from "react-redux";
import { Card, CardImg, Button, CardHeader } from "reactstrap";

const FileDetails = ({ currentId }) => {
  const file = useSelector((state) =>
    currentId ? state.file.find((p) => p._id === currentId) : null
  );

  return (
    <div>
      <Card className={"cardContainer"} >
        <CardHeader tag="h5">
          Creator: {file ? file.name : null}
        </CardHeader>
        <CardHeader tag="h6">
          File Name: {file ? file.fileName : null}{" "}
        </CardHeader>
        <CardHeader tag="h6">
        File Title: {file ? file.fileTitle : null}
        </CardHeader>
        <CardHeader>
        File Type: {file ? file.fileType : null}
        </CardHeader>
        <CardHeader>
          Description: {file ? file.fileDescription : null}
        </CardHeader>
      </Card>
    </div>
  );
};

export default FileDetails;
