import React from "react";

const ImagemModo = ({ srcParam, altParam }) => {
  return (
    <img
      src={srcParam}
      alt={altParam}
      style={{
        maxWidth: "70%",
        maxHeight: "70%",
        
        marginTop: "10%",
      }}
    />
  );
};

export default ImagemModo;
