"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import withAuth from "./hooks/withAuth";
async function Home() {
  return (
    <>
      <h1 className="text-center">Welcome to Devonix! </h1>
    </>
  );
}
// export default withAuth({
//   WrappedComponent: Home,
// });
export default Home;
