import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FileList from '../Search/FileList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [fileListDefault, setFileListDefault] = useState();
  const [fileList, setFileList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:5002/api/file/')
      .then(response => response.json())
      .then(data => {
         setFileList(data) 
         setFileListDefault(data)
       });}

  const updateInput = async (input) => {
      
     const filtered = fileListDefault.filter(file => {
      return file.fileName.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setFileList(filtered);
  }
  useEffect( () => {
      fetchData()},[setFileList]);
	
  return (
    <div>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <FileList fileList={fileList}  setCurrentId={props.setCurrentId}/>
    </div>
   );
}

export default SearchPage