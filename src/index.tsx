import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavigationProvider>
  </React.StrictMode>
);

reportWebVitals();
