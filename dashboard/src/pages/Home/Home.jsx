import React, { useEffect, useRef } from "react";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "./ComponentesDash/ContainerDash";
import { inicializaGraficos } from "./ComponentesDash/DashboardData";
import ContainerData from "./ComponentesDash/ContainerData";
import Button from "./ComponentesDash/button";
import ContainerInfo from "./ComponentesDash/ContainerInfo";

function Home() {
    useEffect(() => {
        const graficos = inicializaGraficos();

        return () => {
            graficos.forEach((grafico) => grafico.destroy());
        };
    }, []);

    const porcentagemLucroRef = useRef(null);

    useEffect(() => {
        if (document.querySelector("#porcentagemLucro")) {
            document.querySelector("#porcentagemLucro").innerHTML = "50%";
        }
    }, []);

    return (
        <>
            <div className="pl-4 pt-4 w-full">
                <Titulo
                    titulo="Dashboard financeiro"
                    componente={<PeriodoCalendario />}
                />
                <Modal />
            </div>

            <div className="w-full h-auto flex flex-col">
                <div className="flex w-full">
                    <div className="w-1/2 flex justify-center items-center p-2.5 flex-col m-0">
                        <ContainerDash
                            titulo="Faturamento Total"
                            idChart="chart-pie-faturamento"
                        />
                        <div
                            ref={porcentagemLucroRef}
                            style={{
                                position: "absolute",
                                top: "40%",
                                left: "28%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    margin: "0",
                                }}
                            >
                                Lucro
                            </h1>
                            <h1
                                className="text-3xl text-black"
                                id="porcentagemLucro"
                                style={{
                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                                }}
                            ></h1>
                        </div>
                        <div className="flex justify-between items-center w-full mt-1 mb-1">
                            <ContainerData titulo={"Maior Retorno"} valor={"Cliente"} />
                            <ContainerData titulo={"Menor Retorno"} valor={"Cliente"} />
                            
                        </div>
                        <ContainerInfo />
                      
                    </div>

                    <div className="w-1/2 flex justify-center items-center p-2.5 flex-col">
                        <ContainerDash
                            titulo="Custo Operacional"
                            idChart="chart-linha-custo"
                        />
                        <div className="flex justify-center items-center w-full pt-0">
                            <div className="flex justify-center items-center w-full flex-col">
                                <div className="flex justify-between items-center w-full pt-0.5">
                                    <ContainerData titulo={"Ticket Médio"} valor={"R$ 700,00"} />
                                    <ContainerData
                                        titulo={"Despesas Variáveis"}
                                        valor={"R$ 300,00"}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full pt-0.5">
                                    <ContainerData
                                        titulo={"Despesas Fixas"}
                                        valor={"R$ 27.000,00"}
                                    />
                                    <ContainerData titulo={"Impostos"} valor={"R$ 2.700,00"} />
                                </div>
                                <div className="flex justify-between items-center w-full pt-0.5">
                                    <ContainerData titulo={"Taxas"} valor={"R$ 200,00"} />
                                    <div className="w-1/2 flex justify-center items-center">
                                        <Button />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

//
//
// <ContainerData titulo={"Taxas"} valor={"R$ 200,00"} />

//
// <ContainerData titulo={"Impostos"} valor={"R$ 2.700,00"} />
