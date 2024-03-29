import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Page from './Components/Main_Page/Main_Page';
import "./index.css";
import Homepage from "./Components/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Page></Main_Page>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);