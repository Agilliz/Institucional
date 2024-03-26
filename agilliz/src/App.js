import "./App.css";
import Container from "./components/Container";
import Navegacao from "./components/Navegacao";
import logoCoelhinho from "./images/logo-coelinho.png";
import fotoPC from "./images/monitor.png";
import fotoCaminhao from "./images/caminhao.svg";
import numero1ModOperacoes from "./images/svgNumero1Mod.svg";
import segundaImagemModo from "./images/segunda-imagem-modo.svg";
import vetorSeta1 from "./images/vetor-seta-1.svg";
import vetorSeta2 from "./images/vetor-seta-2.svg"
import maoCelular from "./images/maoCelular.svg"
import Etapa from "./components/EtapaModoOperacao";
import numero3ModOperacoes from "./images/svgNumero3Mod.svg";
import rapazMoto from "./images/rapazMoto.svg";
import numero2ModOperacoes from "./images/svgNumero2Mod.svg";
import mocaMoto from "./images/mocaNaMoto.svg";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <div className="flex">
          <div className="w-full flex items-center justify-around">
            <Navegacao />
          </div>

          <div className="w-full flex items-center justify-center background">
            <Container
              altura={"83vh"}
              largura={70}
              ladoEsquerdo={
                <>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "auto",
                      fontSize: "32px",
                      marginBottom: "5%",
                    }}
                  >
                    <h1>
                      O <span style={{ color: "#DE6600" }}>Poder</span> da
                      logística na palma da
                    </h1>
                    <h1>
                      sua <span style={{ color: "#DE6600" }}>Mão </span> e ao
                      dispor da sua
                    </h1>
                    <h1>
                      <span style={{ color: "#DE6600" }}>Empresa</span>
                    </h1>
                    <button
                      style={{
                        width: "50%",
                        height: "50px",
                        backgroundColor: "#DE6600",
                        borderRadius: "10px",
                        fontSize: "16px",
                        marginTop: "7%",
                        color: "white",
                      }}
                    >
                      Contratar Serviço
                    </button>
                  </div>
                </>
              }
              ladoDireito={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={maoCelular}
                    alt="Mão de madeira usando celular com logo da aplicação"
                    style={{ maxWidth: "98%", maxHeight: "98%", marginRight: "5%", filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"}}
                  />
                </div>
              }
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <Container
              tituloSessao={
                <div>
                  <h1
                    style={{
                      fontSize: "32px",
                      textAlign: "center",
                      backgroundColor: "#F4F6F9",
                      fontWeight: "600",
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "4px solid #DE6600",
                        borderRadius: "3px",
                      }}
                    >
                      SOBRE
                    </span>{" "}
                    NÓS
                  </h1>
                </div>
              }
              altura={"60vh"}
              corFundo={"#F4F6F9"}
              largura={45}
              ladoEsquerdo={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={fotoPC}
                    alt="foto de computador com a aplicação"
                    style={{ maxWidth: "80%", maxHeight: "100%" }}
                  />
                </div>
              }
              ladoDireito={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "right",
                      fontSize: "24px",
                    }}
                  >
                    <span>
                      A <span style={{ color: "#DE6600" }}>Agil Logistics</span>{" "}
                      foi criada com o propósito de
                    </span>
                    <span> aprimorar a logística empresarial por meio de </span>
                    <span>
                      tecnologias integradas. Com soluções personalizadas,{" "}
                    </span>
                    <span>
                      que combinam software avançado, análise de dados{" "}
                    </span>
                    <span>
                      {" "}
                      e automação de processos, ajudamos os clientes a{" "}
                    </span>
                    <span>
                      otimizar suas operações, reduzir custos e melhorar a{" "}
                    </span>
                    <span>eficiência.</span>
                  </div>
                </div>
              }
            />
          </div>

          <div
            className="w-full flex items-center justify-center"
            style={{ position: "relative" }}
          >
             <div
                    style={{
                      width: "54%",
                      position: "absolute",
                      transform: "translate(60%, -90%)",
                      top: "50%",
                      zIndex: 1
                    }}
                  >
                    <img src={vetorSeta1} style={{width: "60%"}}></img>
                  </div>

                  <div
                    style={{
                      width: "51%",
                      position: "absolute",
                      transform: "translate(65%, 150%)",
                      top: "50%",
                      zIndex: 1,
                      
                    }}
                  >
                    <img src={vetorSeta2} style={{width: "60%"}}></img>
                  </div>


            <Container
              tituloSessao={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <img
                      src={fotoCaminhao}
                      alt="Decoração com imagem simples de caminhão"
                      style={{ maxWidth: "20%", maxHeight: "20%" }}
                    ></img>
                    <div
                      style={{
                        fontSize: "32px",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      <h1>
                        <span
                          style={{
                            borderBottom: "4px solid #DE6600",
                            borderRadius: "3px",
                          }}
                        >
                          MODO
                        </span>
                        <span> DE OPERAÇÃO </span>
                      </h1>
                    </div>
                  </div>
                </div>
              }
              largura={50}
              ladoEsquerdo={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    
                  }}
                >
                 

                 <Etapa
                 texto={`<span>Com nosso aplicativo móvel, o</span>
                 <span>coletor pode escanear facilmente</span>
                 <span>todos os pacotes do fornecedor</span>
                 <span>de forma rápida e prática. </span>`}
                 svgNUmeroEtapa={numero1ModOperacoes}
                  etapa={"Coleta"}
                  margem={"25%"}
                 />

                  <div>
                    <img
                      src={segundaImagemModo}
                      alt="Imagem de moça carregando pacotes com celular na mão"
                      style={{
                        maxWidth: "70%",
                        maxHeight: "70%",
                        
                        marginTop: "10%",
                      }}
                    />

                  <Etapa
                  texto={`<span>Os entregadores selecionam as</span>
                        <span>rotas de entrega de sua preferência</span>
                        <span>e automaticamente gera uma rota </span>
                        <span>otimziada. Assim que a rota é</span>
                        <span>definida, o cliente consumidor é</span>
                        <span>prontamente notificado de que seu</span>
                        <span>pedido está a caminho.</span>`}

                  svgNUmeroEtapa={numero3ModOperacoes}
                  etapa={"Entregas"}
                  margem={"10%"}
                      />  

                    

                  </div>
                </div>
              }
              ladoDireito={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                 <img
                      src={rapazMoto}
                      alt="Rapaz andando de moto com rotas ao fundo"
                      style={{
                        maxWidth: "70%",
                        maxHeight: "70%",
                        marginTop: "10%",
                      }}
                    />
                   <Etapa
                  texto={`<span>Os entregadores selecionam as</span>
                        <span>rotas de entrega de sua preferência</span>
                        <span>e automaticamente gera uma rota </span>
                        <span>otimziada. Assim que a rota é</span>
                        <span>definida, o cliente consumidor é</span>
                        <span>prontamente notificado de que seu</span>
                        <span>pedido está a caminho.</span>`}

                  svgNUmeroEtapa={numero2ModOperacoes}
                  etapa={"Gestão e Preparo"}
                  margem={"50%"}
                      />  

<img
                      src={mocaMoto}
                      alt="Rapaz andando de moto com rotas ao fundo"
                      style={{
                        maxWidth: "70%",
                        maxHeight: "70%",
                       
                      }}
                    />

                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
