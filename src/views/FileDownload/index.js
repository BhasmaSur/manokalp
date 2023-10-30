import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FileDownload = () => {
  const [startNumber, setStartNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(8);
  let navigate = useNavigate();
//   const [fileCreated, setFileCreated] = useState(null)
  
//   useEffect(()=>{
//     let rowText = "";
//     let space = " ";
//     for (let index = startNumber; index <= lastNumber ; index++) {
//         if(index === startNumber){
//             rowText = String(index);
//         }else{
//             rowText = rowText + String(index);
//         }
//     }
//     const fileTemp = new Blob([rowText], {
//       type: "text/plain;charset=utf-8",
//     });
//     setFileCreated(fileTemp);
//   },[startNumber, lastNumber])
  const createPage = () =>{
    navigate("/page-created", { state : {
        startNumber : startNumber,
        lastNumber : lastNumber
    }})
  }
  return (
    <div>
      <input
        value={startNumber}
        onChange={(e) => setStartNumber(e.target.value)}
        type="text"
      />
      <input
        value={lastNumber}
        onChange={(e) => setLastNumber(e.target.value)}
        type="text"
      />
      <button onClick={createPage} >Create Page</button>
      {/* {fileCreated && <a
        download="sample.txt"
        target="_blank"
        rel="noreferrer"
        href={URL.createObjectURL(fileCreated)}
        style={{
          textDecoration: "inherit",
          color: "inherit",
        }}
      >
        Download
      </a>} */}
      
    </div>
  );
};

export default FileDownload;
