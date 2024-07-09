import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./route/Routers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Routers}>
      <div className="max-w-7xl mx-auto">
      <App />
      </div>
    </RouterProvider>
  </React.StrictMode>
);
