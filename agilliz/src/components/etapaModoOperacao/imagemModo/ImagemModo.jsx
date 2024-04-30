import React from "react";

const ImagemModo = ({ srcParam, altParam, maxWidth}) => {
  return (
    <img
      src={srcParam}
      alt={altParam}
      style={{
        maxWidth: `${maxWidth}`
      }}
    />
  );
};

export default ImagemModo;
