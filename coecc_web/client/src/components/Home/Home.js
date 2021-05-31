import React from "react";
import { Container, Col, Row } from "reactstrap";
import Files from "../File/FileS";
import FileForm from "../Forms/FileForm/FileForm";

const Home = ({currentId, setCurrentId}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
            <Files setCurrentId={setCurrentId} />
          </Col>
          <Col md="4">
            <FileForm currentId={currentId} setCurrentId={setCurrentId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
