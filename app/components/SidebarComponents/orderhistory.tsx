"use client";

// components/OrderHistory.tsx
import React from "react";

interface Order {
  id: string;
  date: string;
  status: string;
  totalPrice: string;
}

const orders: Order[] = [
  {
    id: "12345",
    date: "2023-09-15",
    status: "Shipped",
    totalPrice: "$59.99",
  },
  {
    id: "12346",
    date: "2023-09-10",
    status: "Delivered",
    totalPrice: "$39.99",
  },
  {
    id: "12347",
    date: "2023-09-05",
    status: "Pending",
    totalPrice: "$79.99",
  },
  // Add more order entries as needed
];

const OrderHistory: React.FC = () => {
  return (
    <div className="w-96">
      <h2 className="text-xl font-semibold mb-4 ">Order History</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-semibold">Order #{order.id}</p>
              <p className="text-gray-600">{order.date}</p>
            </div>
            <div>
              <p>{order.status}</p>
              <p className="text-gray-600">{order.totalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
