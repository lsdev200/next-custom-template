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
import Pagination from "./components/pagination";
import Widget1 from "./components/widget/widget1";
import Widget2 from "./components/widget/widget2";
import ColorPicker from "./components/colorpicker";
import ImageCarousel from "./components/Carousel/imageCarousel";
import VideoPlayer from "./components/VIdeoPlayer/videoplayer";
import ReviewComponent from "./components/review";
import FAQAccordion from "./components/faq";
import ChatBox, { Message } from "./components/chatBox/chatbox";
import Map from "./components/googleMap/googlemap";
import CountdownTimer from "./components/countdown";

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

  // ** pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with your total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can fetch data for the new page here
  };

  // ** color picker
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // ** image carousel
  const images = [
    "/assets/img/Event-photography-examples.jpg",
    "/assets/img/event.jpg",
    "/assets/img/Fiestro_img3.jpg",
    // Add more image URLs
  ];

  const captions = [
    "Image 1 Caption",
    "Image 2 Caption",
    "Image 3 Caption",
    // Add more captions
  ];

  // ** video url
  const videoUrl = "assets/video/black_hole_-_15297 (540p).mp4";
  // ** review
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Great product! Highly recommended.",
      date: "2023-01-10",
      helpfulCount: 15,
    },
    {
      id: 2,
      rating: 4,
      text: "Good product, but could be improved.",
      date: "2023-01-05",
      helpfulCount: 10,
    },
    // Add more reviews here
  ];

  // ** FAQ
  const faqCategories = [
    {
      id: 1,
      name: "General",
      faqs: [
        {
          id: 1,
          question: "What is our company mission?",
          answer: "Our mission is...",
        },
        {
          id: 2,
          question: "How do I contact customer support?",
          answer: "You can contact us...",
        },
      ],
    },
    {
      id: 2,
      name: "Billing",
      faqs: [
        {
          id: 3,
          question: "How do I change my billing information?",
          answer: "To change your billing info...",
        },
      ],
    },
    // Add more FAQ categories and items
  ];

  // ** notificatio
  const notifications = [
    { id: 1, message: "New message received", isNew: true },
    { id: 2, message: "Reminder: Meeting at 3 PM", isNew: true },
    { id: 3, message: "Your order has been shipped", isNew: false },
    // Add more notifications
  ];
  // ** chatbox
  const [messages, setMessages] = useState<Message[]>([]);
  const userAvatar = "/assets/img/EventManagement.jpg";

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      user: "User",
      avatar: userAvatar,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  const handledelete = (id: number) => {
    const updatemessage = messages.filter((message) => message.id !== id);
    setMessages(updatemessage);
  };
  const handleupdate = (id: number) => {};
  // ** socialshare
  const socialMediaProfiles = [
    { platform: "facebook", link: "https://www.facebook.com/yourpage" },
    { platform: "twitter", link: "https://twitter.com/yourhandle" },
    { platform: "instagram", link: "https://www.instagram.com/yourusername" },
    { platform: "linkedin", link: "https://www.linkedin.com/in/yourprofile" },
  ];

  // ** google map
  const locations = [
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: 40.7128, lng: -74.006, name: "New York City" },
  ];
  const center = { lat: 37.7749, lng: -122.4194, name: "San Francisco" };

  // ** countdown
  const targetDate = new Date("2023-12-31T23:59:59");
  return (
    <>
      {/* <div className="container mx-auto p-4">
        <ImageCarousel images={images} captions={captions} autoPlay={true} />
      </div> */}
      <div className="w-full h-full flex flex-wrap justify-center items-center ">
        <div className="flex w-full gap-24 ml-24 ">
          <DataVisualizationBar data={barchartdata.data} />
          <DataVisualizationPie data={piechartdata.data} />
          <DataVisualizationDoughnut data={doughnutchartdata.data} />
        </div>
        <div className="w-full flex gap-24 ml-24 ">
          <DataVisualizationLine data={linechartdata.data} />
          <DataVisualizationPolarArea data={polarareachartdata.data} />
          <DataVisualizationRadar data={radarchartdata.data} />
        </div>

        {/* <UserList users={userlist} /> */}
        {/* <FileUpload
          allowedFileTypes={filetypes}
          onUpload={onUpload}
          maxFileSize={filsize}
        /> */}
        {/* <DatePicker onDateChange={onDateChange} selectedDate={selecteddate} /> */}
        {/* <DropdownMenu /> */}
        {/* <div className="p-4">
          <Alert type="success" message="Success alert message" />
          <Alert type="error" message="Error alert message" />
          <Alert type="info" message="Info alert message" />
          <Alert type="warning" message="Warning alert message" />
          <Alert type="primary" message="Primary alert message" />
          <Alert type="secondary" message="Secondary alert message" />
        </div> */}
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        /> */}

        {/* <div>
          <Widget1 />
          <Widget2 />

        </div> */}
        {/* <ColorPicker
          initialColor={selectedColor}
          onColorChange={handleColorChange}
        /> */}
        {/* {/* </div> */}
        {/* <div className="container mx-auto p-4 w-[50vw]">
        <h1 className="text-2xl font-semibold mb-4">Video Player</h1>
        <VideoPlayer videoUrl={videoUrl} />
      </div> */}
        {/* 
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Product Reviews</h1>
        <ReviewComponent reviews={reviews} />
      </div> */}
        {/* <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        <FAQAccordion categories={faqCategories} />
    </h1>*/}

        {/* <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Chat Box</h1>
          <ChatBox
            messages={messages}
            onSendMessage={handleSendMessage}
            handledelete={handledelete}
            handleupdate={handleupdate}
          />
        </div> */}
        {/* <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Map Integration</h1>
          <Map locations={locations} center={center} />
        </div> */}
        {/* <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Countdown Timer</h1>
          <CountdownTimer targetDate={targetDate}  />
        </div> */}
      </div>
    </>
  );
}

export default Home;
