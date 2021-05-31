import React from "react";
import { useSelector } from "react-redux";
import MyFile from "./MyFiles/myFiles";
import { Col, Container, Row } from "reactstrap";
import FileForm from "../Forms/FileForm/FileForm";

const MyFiles = ({ currentId, setCurrentId }) => {
  const files = useSelector((state) => state.file);
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
            {files.map((file) => (
              (user?.result?.googleId === file?.creator || user?.result?._id === file?.creator) && (
                <MyFile file={file} setCurrentId={setCurrentId} key={file._id} />
              )
            ))}
          </Col>
          <Col md="4">
            <FileForm currentId={currentId} setCurrentId={setCurrentId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFiles;
