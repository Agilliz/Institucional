import React, { useEffect, useRef } from "react";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "./ComponentesDash/ContainerDash";
import { inicializaGraficos } from "./DashboardData";
import ContainerData from "./ComponentesDash/ContainerData";
import Button from "./ComponentesDash/button";
import ContainerZona from "./ComponentesDash/ContainerMapaZona";

function Home() {
  useEffect(() => {
    const graficos = inicializaGraficos();

    return () => {
      graficos.forEach((grafico) => grafico.destroy());
    };
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
          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-7">
            <ContainerDash
              titulo="Faturamento Total"
              idChart="chart-bar"
            />         

            <div className="flex justify-between items-center w-full mb-3">
              <ContainerData titulo={"Maior Retorno"} valor={"Cliente"} />
              <ContainerData titulo={"Menor Retorno"} valor={"Cliente"} />
            </div>
            <div className="flex justify-between items-center w-full mt-1 mb-1">
              <ContainerZona titulo={"Área Maior Retorno"} valor={"Mauá"} />
              <ContainerZona titulo={"Área Menor Retorno"} valor={"Itaquera"} />
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-7">
            <ContainerDash
              titulo="Custo Operacional"
              idChart="chart-linha"
            />
            <div className="flex justify-center items-center w-full">
              <div className="flex justify-center items-center w-full flex-col">
                <div className="flex justify-between items-center w-full pt-1 mb-3">
                  <ContainerData titulo={"Ticket Médio"} valor={"R$ 700,00"} />
                  <ContainerData
                    titulo={"Despesas Variáveis"}
                    valor={"R$ 300,00"}
                  />
                </div>
                <div className="flex justify-between items-center w-full mb-2">
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
