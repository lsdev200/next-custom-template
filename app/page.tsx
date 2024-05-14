"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import UserSettings from "./components/usersettings";
import DataVisualizationBar from "./components/DataVisualization/datavisualizationbar";
import DataVisualizationLine from "./components/DataVisualization/datavisualizationline";
import DropdownSelect from "./components/formComponents/dropdownselect";
import barchartdata from "@/dummydata/barchartdata.json";
import DataVisualizationDoughnut from "./components/DataVisualization/datavisualizationdoughnut";
import piechartdata from "@/dummydata/piechartdata.json";
import userlist from "@/dummydata/userlist.json";
import doughnutchartdata from "@/dummydata/doughnutchartdata.json";
import linechartdata from "@/dummydata/linechartdata.json";
import polarareachartdata from "@/dummydata/polararea.json";
import radarchartdata from "@/dummydata/radarchartdata.json";
import DataVisualizationPie from "./components/DataVisualization/datavisualizationpie";
import DataVisualizationPolarArea from "./components/DataVisualization/datavisualizationpolararea";
import DataVisualizationRadar from "./components/DataVisualization/datavisualizationradar";

import ChatBox, { Message } from "./components/chatBox/chatbox";


function Home() {
  // ** color picker
  const [selectedColor, setSelectedColor] = useState("#FF5733");
  const filetypes = ["image/png", "image/jpeg"];
  const filsize = 100000;


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
        {/* */}
        {/* <DatePicker onDateChange={onDateChange} selectedDate={selecteddate} /> */}

        {/* <ColorPicker
          initialColor={selectedColor}
          onColorChange={handleColorChange}
        /> */}

        {/* <div className="container mx-auto p-4">*/}

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
      </div>
    </>
  );
}

export default Home;
