import React from 'react';
import File from "../File/File/File";
import { Col } from "reactstrap";


const FileList = ({fileList=[], setCurrentId}) => {

  
  return (
    <div>
     <Col md="8"  >
    {fileList.map((data) => {
        if (data) {
          return (
            <div key={data.fileName}>
            
            
          <File file={data} setCurrentId={setCurrentId} key={data._id} />
        
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </Col>
    </div>
    
  );
}

export default FileList