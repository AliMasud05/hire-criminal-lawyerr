import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type React from "react";

// import ChatWidget from "@/components/defaultLayout/ChatWidget";
import { MobileSidebar } from "@/components/defaultLayout/MobileSidebar";
import { Sidebar } from "@/components/defaultLayout/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nabil Ben-Naoum - Criminal Defense Lawyer",
  description:
    "Trusted criminal defense attorney providing personalized legal services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="flex min-h-screen bg-white">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/5 xl:w-1/6">
            <Sidebar />
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar />

          {/* Main Content */}
          <div className="flex-1 lg:w-4/5 xl:w-5/6">{children}</div>

          {/* Chat Icon - positioned fixed at bottom right */}
          {/* <ChatWidget /> */}
          
        </div>
      </body>
    </html>
  );
}
