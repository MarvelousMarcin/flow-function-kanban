import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import ReduxProvider from "./Provider";
export const metadata = {
  title: "Flow Function Simulation",
  description: "Kanban Simulator App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
