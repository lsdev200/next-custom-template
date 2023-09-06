import { FaHome } from "react-icons/fa";

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
      icon: "tabler:database-plus",
      title: "Form Components",
      children: [
        {
          title: "Input",

          path: "/formcomponents/input",
          // icon: 'tabler:'
        },
        {
          title: "Dropdown",

          path: "/formcomponents/dropdown",
          // icon: 'tabler:'
        },
        {
          title: "Dropdown Select",

          path: "/formcomponents/dropdownselect",

          // icon: 'tabler:'
        },
        {
          title: "File Upload",

          path: "/formcomponents/fileupload",

          // icon: 'tabler:'
        },
        {
          title: "Calendar",

          path: "/formcomponents/calendar",

          // icon: 'tabler:'
        },
      ],
    },
  ];
};

export default Navigation;
