"use client";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AllBoards from "./components/Board/AllBoards";
const queryClient = new QueryClient();

export default function Simulation() {
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>
        <AllBoards />
      </QueryClientProvider>
    </main>
  );
}
