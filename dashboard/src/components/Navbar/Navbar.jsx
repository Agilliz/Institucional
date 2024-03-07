import React from "react";
import Logo from "./Logo";
import Button from "./Button/Button";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEBike2Fill } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


const Navbar = () => {
    return (
        <div className="w-44 h-full">
            <div className=" w">
                <Logo></Logo>
            </div>
            <ul className="h-3/5 flex flex-col pt-6">

                <li className="flex justify-center items-center py-3 pl-2">
                    <Button>
                        <FaChartPie />
                        <span className="ml-1">Dashboards</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
                <li className="flex justify-center items-center py-3 pl-2">
                    <Button>
                        <FaChartLine />
                        <span className="ml-1">Gestão</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
                <li className="flex justify-center items-center py-3 pl-2">
                    <Button>
                        <FaChartLine />
                        <span className="ml-1">Financeiro</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
                <li className="flex justify-center items-center py-3 pl-2">
                    <Button>
                        <TbTruckDelivery />
                        <span className="ml-1">Coletas</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
                <li className="flex justify-center items-center py-3 pl-2">
                    <Button>
                        <RiEBike2Fill />
                        <span className="ml-1">Entregas</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
            </ul>
            <ul className="flex justify-center items-center flex-col">
            <li className="flex justify-center items-center py-4 w-11/12">
                    <Button>
                        <BiSupport />
                        <span className="ml-1">Suporte</span>
                        <RiArrowDropDownLine />
                    </Button>
                </li>
                <li className="flex justify-center items-center py-4 w-11/12">
                    <Button>
                        <TbAdjustmentsHorizontal />
                        <span className="ml-1">Ajustes</span>
                    </Button>
                </li>
                <li className="flex justify-center items-center py-4 w-5/6">
                    <button className="w-full h-12 bg-agilzblue rounded-lg text-[#FFFFFF] font-sans font-bold flex justify-center items-center">
                        <ImExit />
                        Sair
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar