import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { loader as rootLoader, action as rootAction } from "./routes/root";
import { loader as contactLoader } from "./routes/contact";
import "bootstrap/dist/css/bootstrap.min.css";

import AdmissionCreate from "./pages/admission/Create";
import AllAdmission from "./pages/admission/Index";

import CustomerCreate from "./pages/customer/Create";
import CustomerIndex from "./pages/customer/Index";

import CreateBank from "./pages/bank/Create";
import AllBanks from "./pages/bank/Index";

import { store } from "./store/store";
import { Provider } from "react-redux";

import OfficeCreate from "./pages/office/Create";
import AllOffice from "./pages/office/index";

import DashBoardIndex from "./pages/dashboard/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/",
        element: <DashBoardIndex />,
      },
      //** */  Customer Route
      {
        path: "/customer",
        element: <CustomerIndex />,
        loader: contactLoader,
      },
      {
        path: "/customer/create",
        element: <CustomerCreate />,
        loader: contactLoader,
      },
      {
        path: "/customer/edit/:id",
        element: <CustomerCreate />,
        loader: contactLoader,
      },

      //** */ Bank Route
      {
        path: "/bank",
        element: <AllBanks />,
        loader: contactLoader,
      },
      {
        path: "bank/create",
        element: <CreateBank />,
        loader: contactLoader,
      },
      {
        path: "/bank/update/:id",
        element: <CreateBank />,
        loader: contactLoader,
      },
      // ** Admission Route
      {
        path: "/admission",
        element: <AllAdmission />,
        loader: contactLoader,
      },
      {
        path: "admission/create",
        element: <AdmissionCreate />,
        loader: contactLoader,
      },
      {
        path: "/admission/edit/:id",
        element: <AdmissionCreate />,
        loader: contactLoader,
      },

      //** */ Office Route
      {
        path: "/office",
        element: <AllOffice />,
        loader: contactLoader,
      },
      {
        path: "office/create",
        element: <OfficeCreate />,
        loader: contactLoader,
      },
      {
        path: "/office/edit/:id",
        element: <OfficeCreate />,
        loader: contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
