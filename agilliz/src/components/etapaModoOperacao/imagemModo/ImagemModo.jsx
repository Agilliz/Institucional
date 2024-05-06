import React from "react";

const ImagemModo = ({ srcParam, altParam, size}) => {
  return (
    <div style={{
      display: "flex",
      width: "50%",
      justifyContent: "center",
      alignItems: "center"
    }}>
       <img
      src={srcParam}
      alt={altParam}
      style={{
        minWidth: `${size}` + "vw",
        marginLeft: "100%",
        margin: "5"
      }}
    />
    </div>
   
  );
};

export default ImagemModo;
