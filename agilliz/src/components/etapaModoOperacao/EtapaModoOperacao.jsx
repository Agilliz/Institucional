import React from 'react';
import DOMPurify from 'dompurify';


const Etapa = ({texto, etapa, svgNUmeroEtapa, margem}) => {
  const textoLimpo = DOMPurify.sanitize(texto);
    return (
        <div
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: `${margem}`
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "",
            maxWidth: "60%",
            marginBottom: "4%",
          }}
        >
          <img src={svgNUmeroEtapa}/>
          <h1
            style={{
              color: "#DE6600",
              width: "100%",
              fontSize: "32px",
              fontWeight: "700",
              textAlign: "left",
              marginLeft: "5%",
            }}
            
          >     
            {etapa}
            
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            fontSize: "20px",
          }}
          dangerouslySetInnerHTML={{ __html: textoLimpo }}
        >
          
        </div>
      </div>
    );
};



export default Etapa;