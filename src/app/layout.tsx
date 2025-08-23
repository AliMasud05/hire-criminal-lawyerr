import GoogleTranslateProvider from "@/components/defaultLayout/GoogleTranslateProvider";
import NextAuthSessionProvider from "@/lib/NextAuthSessionProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import CrispChat from "@/components/defaultLayout/CrispChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Starter kit",
  description: "starter kit for nextjs with redux and redux persist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Toaster position="bottom-right" richColors />
        <NextAuthSessionProvider>
          <GoogleTranslateProvider>
            <ReduxProvider>{children}</ReduxProvider>
            {/* <TawkToChat /> */}
            <CrispChat />
          </GoogleTranslateProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
