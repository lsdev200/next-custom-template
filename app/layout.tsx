import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/navbarComponents/Navbar";
import SidebarMenu from "./components/SidebarComponents/sidebarnew";
import Loading from "./loading";
import moment from "moment";
const inter = Inter({ subsets: ["latin"] });

const currentYear = moment().year();

export const metadata: Metadata = {
  title: "Devonix",
  description: "Generated by Varsil Suvagiya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen bg-gray-100">
            <SidebarMenu />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f6f8fa] ">
                {children}
              </main>
              <div className="flex justify-center items-center mb-5 bg-[#f6f8fa]">
                <div className="font-bold ">
                  Copyright © Designed & Developed by Varsil Suvagiya &nbsp;
                
                </div>
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
