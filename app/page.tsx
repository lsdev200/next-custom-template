"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import withAuth from "./hooks/withAuth";
import DropdownMenu from "./components/dropdown";
import UserProfileCard from "./components/userprofilecard";
import SearchBar from "./components/searchbar";
import NotificationsPanel from "./components/notification";
import ModalDialog from "./components/modal";
import Tabs from "./components/tabs";
import ProductList from "./components/productlist";
import ProductCard from "./components/productcard";
import ProductFilters from "./components/productfilter";
import OrderHistory from "./components/orderhistory";
import OrderDetails from "./components/orderdetail";
import orderdetaildata from "@/dummydata/orderdetail.json";
import chartdata from "@/dummydata/chartdata.json";
import UserSettings from "./components/usersettings";
import DataVisualization from "./components/datavisualization";
import DropdownSelect from "./components/dropdownselect";

async function Home() {
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
  // console.log(chartdata);

  const onFilterChange = () => {};

  return (
    <>
      <h1 className="text-center">Welcome to Devonix!</h1>
      <div className="w-full h-full flex justify-center items-center ">
        {/* <DropdownMenu /> */}
        {/* <UserProfileCard /> */}
        {/* <SearchBar /> */}
        {/* <NotificationsPanel /> */}
        {/* <ModalDialog /> */}
        {/* <Tabs /> */}
        {/* <ProductList /> */}
        {/* <ProductCard /> */}
        {/* <ProductFilters onFilterChange={onFilterChange} /> */}
        {/* <OrderHistory /> */}

        {/* <OrderDetails /> */}
        {/* <div className="grid grid-cols-4 gap-5">
          {orderdetaildata.map((order, index) => (
            <OrderDetails
              key={index}
              orderNumber={index}
              date={order.date}
              items={order.items}
              status={order.status}
              totalPrice={order.totalPrice}
            />
          ))}
        </div> */}

        {/* <UserSettings
          user={{
            id: 1,
            name: "jay",
            email: "jay@123.com",
            bio: "hii thois is my bio",
          }}
          onSave={()=>{}}
        /> */}
        {/* <DataVisualization data={chartdata.data} /> */}
        {/* <DropdownSelect
          label="Select an option"
          options={dropdownoption}
          value={selectedValue}
          onChange={handleDropdownChange}
        /> */}
      </div>
    </>
  );
}

export default Home;
