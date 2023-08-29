"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

interface withAuthProps {
  WrappedComponent: React.ComponentType<any>;
  unprotected?: boolean;
}

const withAuth = ({ WrappedComponent, unprotected = false }: withAuthProps) => {
  const Wrapper = (props: any) => {
    console.log(props);

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    // Check for the token and redirect to login if it doesn't exist
    useEffect(() => {
      const token = localStorage.getItem("user");
      const isAuthenticated = !!token; // Check if the token exists

      if (!unprotected && !isAuthenticated) {
        // Redirect unauthenticated users to the login page
        router.push("/Login");
      } else if (unprotected && isAuthenticated) {
        // Redirect authenticated users away from the login page to the home page
        router.push("/");
      } else {
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unprotected, router]);

    // Render loading state or the WrappedComponent based on the loading state
    if (loading) {
      // You can render a loading spinner or any loading indicator here
      return <Loading />;
    }

    // Pass the props to the WrappedComponent once the token check is completed
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
