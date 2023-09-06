import { FaHome } from "react-icons/fa";
import { LiaCaretRightSolid } from "react-icons/lia";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { AiOutlineForm } from "react-icons/ai";

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
  ];
};

export default Navigation;
