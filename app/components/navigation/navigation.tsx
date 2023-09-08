import { FaHome } from "react-icons/fa";
import { LiaCaretRightSolid } from "react-icons/lia";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { AiOutlineForm } from "react-icons/ai";
import { HiMiniBellAlert } from "react-icons/hi2";

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

          path: "/alerts",
          icon: <PiCaretDoubleRightDuotone />,
        },
      ],
    },
  ];
};

export default Navigation;
