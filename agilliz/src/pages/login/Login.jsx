import React from "react";
import styles from "./Login.module.css";
import fotoFundo from "../../images/foto-fundo-login.svg";
import Container from "../../components/container/Container";
import fotoForm from "../../images/como-ser-entregador-na-shopee 1.svg";

const Login = () => {
  return (
    <div
        style={{
            backgroundImage: `url(${fotoFundo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
      <div className={styles.form}>
        <div className={styles.imgForm}>
          <img src={fotoForm} alt="Formulário" />
        </div>
        <div className={styles.camposForm}>
          <h1>LOGIN</h1>
          <div className={styles["wave-group"]}>
            <input required type="text" className={styles.input} />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              <span className={styles["label-char"]} style={{ "--index": 0 }}>
                U
              </span>
              <span className={styles["label-char"]} style={{ "--index": 1 }}>
                s
              </span>
              <span className={styles["label-char"]} style={{ "--index": 2 }}>
                u
              </span>
              <span className={styles["label-char"]} style={{ "--index": 3 }}>
                á
              </span>
              <span className={styles["label-char"]} style={{ "--index": 4 }}>
                r
              </span>
              <span className={styles["label-char"]} style={{ "--index": 5 }}>
                i
              </span>
              <span className={styles["label-char"]} style={{ "--index": 6 }}>
                o
              </span>
            </label>
          </div>

          <div className={styles["wave-group"]}>
            <input required type="text" className={styles.input} />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              <span className={styles["label-char"]} style={{ "--index": 0 }}>
                S
              </span>
              <span className={styles["label-char"]} style={{ "--index": 1 }}>
                e
              </span>
              <span className={styles["label-char"]} style={{ "--index": 2 }}>
                n
              </span>
              <span className={styles["label-char"]} style={{ "--index": 3 }}>
                h
              </span>
              <span className={styles["label-char"]} style={{ "--index": 4 }}>
                a
              </span>
            </label>
          </div>

          <button className={styles["btnLogin"]} type="submit">
            Entrar
          </button>

          <h2>
            Esqueci a senha
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
