"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import withAuth from "./guard/withAuth";

function Home() {
  return (
    <>
      <div className="text-center">Hello Welcome !</div>
    </>
  );
}
export default withAuth({ WrappedComponent: Home });
