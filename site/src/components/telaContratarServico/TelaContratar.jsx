import React from "react";
import Input from "./input/Input";
import styles from "./TelaContratar.module.css";

function TelaContratarServico({ onClose }) {
  const handleClickInsideModal = (event) => {
    event.stopPropagation(); // Impede que o evento seja propagado para o contêiner externo
  };

  const handleCloseModal = () => {
    onClose(); // Chama a função para fechar o modal
  };

  return (
    <div className={styles.modalOverlay} onClick={handleCloseModal}>
      <div className={styles.modalContent} onClick={handleClickInsideModal}>
        <div className={styles.containerSVG} onClick={(e) => e.stopPropagation()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={handleCloseModal} // Fechar ao clicar no SVG
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <div className={styles.titulo}>
          <h1>FORMULÁRIO</h1>
        </div>
        <div className={styles.SessaoInput}>
          <Input label="Nome Empresa" tamanho={50} />
          <Input label={"Nome Fantasia"} tamanho={50} />
        </div>
        <div className={styles.SessaoInput}>
          <Input label={"CNPJ"} tamanho={30} />
          <Input label={"Telefone"} tamanho={30} />
          <Input label={"E-mail"} tamanho={35} />
        </div>
        <div className={styles.SessaoInput}>
          <Input label={"Endereço"} tamanho={35} />
          <Input label={"Número"} tamanho={20} />
          <Input label={"CEP"} tamanho={20} />
          <div style={{ width: "25%" }}></div>
        </div>
        <div className={styles.sessaoBotao}>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default TelaContratarServico;
