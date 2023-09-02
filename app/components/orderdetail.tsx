"use client";

// components/OrderDetails.tsx
import React from "react";

interface OrderItem {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

interface OrderDetailsProps {
  orderNumber: number;
  date: string;
  status: string;
  totalPrice: number;
  items: OrderItem[];
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  orderNumber,
  date,
  status,
  totalPrice,
  items,
}) => {
  return (
    <div className="w-72">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <p className="font-semibold">Order #{orderNumber}</p>
          <p className="text-gray-600">{date}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Status: {status}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="border-t border-b py-2 ">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-1"
              >
                <div>
                  <p className="font-semibold">{item.product}</p>
                  <p className="text-gray-600">
                    {item.quantity} x {item.price}
                  </p>
                </div>
                <p>{(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="font-semibold">Total Price:</p>
            <p>{totalPrice}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            onClick={() => {
              // Add code for order tracking or further actions here
              console.log("Track Order button clicked.");
            }}
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
