"use client";
import Image from "next/image";
// components/ChatBox.tsx
import React, { useState, useEffect, useRef } from "react";

export interface Message {
  id: number;
  text: string;
  user: string;
  avatar: string;
  timestamp: string;
}

interface ChatBoxProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  handledelete: (id: number) => void;
  handleupdate: (id: number) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  onSendMessage,
  handledelete,
  handleupdate,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const update = (id: number) => {
    const updatemessage = messages.filter((message) => message.id === id);
    const [{ text }] = updatemessage;

    setNewMessage(text);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="h-80 overflow-y-auto" ref={chatContainerRef}>
        {messages.map((message) => (
          <div key={message.id} className="mb-4 flex">
            <Image
              src={message.avatar}
              alt={`${message.user}'s avatar`}
              height={200}
              width={200}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">{message.user}</p>
              <p className="text-gray-600 text-sm">{message.timestamp}</p>
              <p className="mt-1">{message.text}</p>
            </div>
            <button type="button" onClick={() => handledelete(message.id)}>
              Delete
            </button>
            <button type="button" onClick={() => update(message.id)}>
              update
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
//! TODO:
// ** update baki ...
