import React from "react";
import styles from "./ContainerDash.module.css";

function ContainerDash({ titulo, idChart }) {
  return (
    <div className={`flex w-full justify-center items-center flex-col rounded-lg ${styles.container}`}>
      <h1 className={styles.fonte}>{titulo}</h1>
      <div className={styles["chartContainer"]}>
        <div id={idChart} className="chart"></div>
      </div>
    </div>
  );
}

export default ContainerDash;
