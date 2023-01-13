import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import ReactGA from "react-ga";

if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
}

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
