import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEBike2Fill } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";

export const menuItemsData = [
    {
      title: 'Dashboards',
      url: '/',
      icon: <FaChartPie />
    },
    {
      title: 'Gestão',
      url: '/services',
      icon: <FaChartLine />
    },
    {
      title: 'Financeiro',
      url: '/about',
      icon: <FaMoneyBillAlt />
    },
    {
      title: 'Coletas',
      url: '/coletas',
      icon: <TbTruckDelivery />
    },
    {
      title: 'Entregas',
      url: '/entregas',
      icon: <RiEBike2Fill />
    }
  ];

