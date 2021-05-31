import React from "react";
import { useSelector } from "react-redux";
import File from "./File/File";
import { Container } from "reactstrap";


const FileS = ({ setCurrentId }) => {
  const files = useSelector((state) => state.file);

 
    return (
    <div>
      <Container>
        
          {files.map((file) => (
          <File file={file} setCurrentId={setCurrentId} key={file._id} />
        ))}
         
      </Container>
    </div>
  );
};

export default FileS;
