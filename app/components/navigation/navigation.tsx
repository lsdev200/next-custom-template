import { FaHome } from "react-icons/fa";
import { LiaCaretRightSolid } from "react-icons/lia";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { AiOutlineForm } from "react-icons/ai";
import { HiMiniBellAlert } from "react-icons/hi2";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BiCarousel } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Navigation = () => {
  return [
    {
      sectionTitle: "Home",
    },
    {
      title: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      sectionTitle: "Form Components",
    },
    {
      icon: <AiOutlineForm />,
      title: "Form ",
      children: [
        {
          title: "Input",

          path: "/formcomponents/input",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Dropdown",

          path: "/formcomponents/dropdown",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Dropdown Select",

          path: "/formcomponents/dropdownselect",

          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "File Upload",

          path: "/formcomponents/fileupload",

          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Calendar",

          path: "/formcomponents/calendar",

          icon: <PiCaretDoubleRightDuotone />,
        },
      ],
    },
    {
      sectionTitle: "Pop-Up",
    },
    {
      icon: <HiMiniBellAlert />,
      title: "PopUp",
      children: [
        {
          title: "Alerts",

          path: "/popup/alert",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Modal",

          path: "/popup/modal",
          icon: <PiCaretDoubleRightDuotone />,
        },
      ],
    },
    {
      sectionTitle: "Player",
    },
    {
      icon: <BsMusicPlayerFill />,
      title: "Player",
      children: [
        {
          title: "Carousel",

          path: "/player/carousel",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Video",

          path: "/player/video",
          icon: <PiCaretDoubleRightDuotone />,
        },
      ],
    },

    {
      sectionTitle: "E-commerce",
    },
    {
      icon: <MdOutlineProductionQuantityLimits />,
      title: "E-commerce",
      children: [
        {
          title: "Order Detail",

          path: "/e-commerce/orderdetail",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Order History",

          path: "/e-commerce/orderhistory",
          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Product",

          path: "/e-commerce/product",

          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Product Filter",

          path: "/e-commerce/productfilter",

          icon: <PiCaretDoubleRightDuotone />,
        },
        {
          title: "Product List",

          path: "/e-commerce/productlist",

          icon: <PiCaretDoubleRightDuotone />,
        },
      ],
    },
  ];
};

export default Navigation;
