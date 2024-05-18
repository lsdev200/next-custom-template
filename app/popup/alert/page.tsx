import Alert from "@/app/components/Alerts/alerts";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <Alert type="success" message="Success alert message" />

      <Alert type="error" message="Error alert message" />
      <Alert type="info" message="Info alert message" />
      <Alert type="warning" message="Warning alert message" />
      <Alert type="primary" message="Primary alert message" />
      <Alert type="secondary" message="Secondary alert message" />
    </div>
  );
};

export default page;
