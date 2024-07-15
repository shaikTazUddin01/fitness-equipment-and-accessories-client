import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./route/Routers.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="bg-primaryColor">
    <div className="max-w-7xl mx-auto">
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistor}>

          <RouterProvider router={Routers}></RouterProvider>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </div>
  </div>
);
