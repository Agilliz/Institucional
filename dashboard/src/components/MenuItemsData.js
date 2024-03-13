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
      icon: <FaChartPie />,
      submenu: [
        {
          title: 'Mensal',
        },
        {
          title: 'Diário',
        }
      ]
    },
    {
      title: 'Gestão',
      icon: <FaChartLine />
    },
    {
      title: 'Financeiro',
      icon: <FaMoneyBillAlt />
    },
    {
      title: 'Coletas',
      icon: <TbTruckDelivery />
    },
    {
      title: 'Entregas',
      icon: <RiEBike2Fill />
    }
  ];

