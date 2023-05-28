"use client";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import socket from "../socket";
import AllBoards from "./components/Board/AllBoards";
import { useEffect } from "react";
const queryClient = new QueryClient();

export default function Simulation() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected");
    });
  }, []);
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>
        <AllBoards />
      </QueryClientProvider>
    </main>
  );
}
