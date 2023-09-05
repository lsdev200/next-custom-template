"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import withAuth from "./hooks/withAuth";
import DropdownMenu from "./components/formComponents/dropdown";
import UserProfileCard from "./components/userprofilecard";
import SearchBar from "./components/navbarComponents/searchbar";
import NotificationsPanel from "./components/navbarComponents/notification";
import ModalDialog from "./components/Modal/modal";
import Tabs from "./components/tabs";
import ProductList from "./components/SidebarComponents/productlist";
import ProductCard from "./components/SidebarComponents/productcard";
import ProductFilters from "./components/SidebarComponents/productfilter";
import OrderHistory from "./components/SidebarComponents/orderhistory";
import OrderDetails from "./components/SidebarComponents/orderdetail";
import orderdetaildata from "@/dummydata/orderdetail.json";

import UserSettings from "./components/usersettings";
import DataVisualizationBar from "./components/DataVisualization/datavisualizationbar";
import DataVisualizationLine from "./components/DataVisualization/datavisualizationline";
import DropdownSelect from "./components/formComponents/dropdownselect";
import barchartdata from "@/dummydata/barchartdata.json";
import piechartdata from "@/dummydata/piechartdata.json";
import userlist from "@/dummydata/userlist.json";
import doughnutchartdata from "@/dummydata/doughnutchartdata.json";
import linechartdata from "@/dummydata/linechartdata.json";
import polarareachartdata from "@/dummydata/polararea.json";
import radarchartdata from "@/dummydata/radarchartdata.json";
import DataVisualizationPie from "./components/DataVisualization/datavisualizationpie";
import DataVisualizationDoughnut from "./components/DataVisualization/datavisualizationdoughnut";
import DataVisualizationPolarArea from "./components/DataVisualization/datavisualizationpolararea";
import DataVisualizationRadar from "./components/DataVisualization/datavisualizationradar";
import SidebarMenu from "./components/SidebarComponents/sidebarnew";
import UserList from "./components/userlist";
import FileUpload from "./components/formComponents/fileupload";
import DatePicker from "./components/formComponents/calendar";
import Alert from "./components/Alerts/alerts";

function Home() {
  const dropdownoption = [
    "Television",
    "Chair",
    "Smartphone",
    "Laptop",
    "Desk",
    "Sofa",
    "Table",
    "Headphones",
    "Refrigerator",
    "Microwave",
    "Washing Machine",
    "Toaster",
    "Blender",
    "Coffee Maker",
    "Vacuum Cleaner",
    "Dining Table",
  ];
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };
  // console.log(orderdetaildata);
  // console.log(piechartdata);

  const onFilterChange = () => {};
  const onUpload = () => {};
  const onDateChange = () => {};
  const selecteddate = new Date();

  const filetypes = ["image/png", "image/jpeg"];
  const filsize = 100000;
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center items-center ">
        {/* <div className="flex w-full gap-24 ml-24 ">
          <DataVisualizationBar data={barchartdata.data} />
          <DataVisualizationPie data={piechartdata.data} />
          <DataVisualizationDoughnut data={doughnutchartdata.data} />
        </div>
        <div className="w-full flex gap-24 ml-24 ">
          <DataVisualizationLine data={linechartdata.data} />
          <DataVisualizationPolarArea data={polarareachartdata.data} />
          <DataVisualizationRadar data={radarchartdata.data} />
        </div> */}

        {/* <UserList users={userlist} /> */}
        {/* <FileUpload
          allowedFileTypes={filetypes}
          onUpload={onUpload}
          maxFileSize={filsize}
        /> */}
        {/* <DatePicker onDateChange={onDateChange} selectedDate={selecteddate} /> */}
        {/* <DropdownMenu /> */}
        <div className="p-4">
          <Alert type="success" message="Success alert message" />
          <Alert type="error" message="Error alert message" />
          <Alert type="info" message="Info alert message" />
          <Alert type="warning" message="Warning alert message" />
          <Alert type="primary" message="Primary alert message" />
          <Alert type="secondary" message="Secondary alert message" />
        </div>
      </div>
    </>
  );
}

export default Home;
