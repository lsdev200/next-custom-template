"use client";

export const isAuthenticated = (): boolean => {
  // Check if a token exists in localStorage or implement your own authentication logic
  const token = localStorage.getItem("user"); // Replace with your actual token check logic
  return !!token;
};
