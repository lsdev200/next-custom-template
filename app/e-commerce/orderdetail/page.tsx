import OrderDetails from "@/app/components/SidebarComponents/orderdetail";
import React from "react";
import orderdetaildata from "@/dummydata/orderdetail.json";
const page = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 ml-10 mt-5">
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
      </div>
    </div>
  );
};

export default page;
