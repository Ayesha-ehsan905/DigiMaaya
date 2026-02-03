import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { QueryClientProvider } from "@tanstack/react-query";
  import { queryClient } from "./lib/react-query";

  createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
  