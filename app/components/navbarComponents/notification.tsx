"use client";

import React, { useState } from "react";

const NotificationsPanel: React.FC = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "You have a new message.",
      isRead: false,
    },
    {
      id: 2,
      text: "Your order has been shipped.",
      isRead: true,
    },
    {
      id: 3,
      text: "Reminder: Event at 3 PM today.",
      isRead: false,
    },
  ]);
  // ** for panel toggle
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const markAsRead = (notificationId: number) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId
        ? { ...notification, isRead: true }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  const dismissNotification = (notificationId: number) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        Notifications
        {notifications.some((notification) => !notification.isRead) && (
          <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-full">
            {
              notifications.filter((notification) => !notification.isRead)
                .length
            }
          </span>
        )}
      </button>
      {isPanelOpen && notifications.length > 0 && (
        <div className="absolute w-[500px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 py-2 ${
                notification.isRead ? "" : "bg-blue-100"
              } hover:bg-gray-100 flex justify-between items-center`}
            >
              <div>{notification.text}</div>
              <div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => dismissNotification(notification.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
