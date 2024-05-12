import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Root from "./routes/root.jsx";
import Privacy from "./routes/privacy.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Meals from "./routes/meals.jsx";
import HowItWorks from "./routes/how-it-works.jsx";
import Faqs from "./routes/faqs.jsx";
import Terms from "./routes/terms-of-service.jsx";
import Root from "./routes/root.jsx";
import Contact from "./routes/contact.jsx";

import "./index.css";

import RootLayout from "./root-layout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/meals",
    element: <Meals />,
  },
  {
    path: "/terms-of-service",
    element: <Terms />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);
