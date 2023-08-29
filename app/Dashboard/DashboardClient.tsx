"use client";

import React from "react";
import withAuth from "../guard/withAuth";

const DashboardClient = () => {
  return <div>DashboardClient</div>;
};

export default withAuth({ WrappedComponent: DashboardClient });
