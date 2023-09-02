"use client";

// components/Tabs.tsx
import React, { useState } from "react";

const Tabs: React.FC = () => {
  const tabs = [
    { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2", label: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`${
              tab.id === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } px-4 py-2 rounded-l-lg hover:bg-blue-600 focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-b-lg border-t">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              tab.id === activeTab ? "block" : "hidden"
            } p-2 text-gray-700`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
//! TODO:
// attractive with animation color also change
