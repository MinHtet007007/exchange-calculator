import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CurrencyProvider from "./context/CurrencyContext.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrencyProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
