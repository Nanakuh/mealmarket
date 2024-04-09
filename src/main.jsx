import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";
import Privacy from "./routes/privacy.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Meals from "./routes/meals.jsx";
import AboutUs from "./routes/about-us.jsx";
import HowItWorks from "./routes/how-it-works.jsx";
import Faqs from "./routes/faqs.jsx";

import "./index.css";
import CustomNavbar from "./components/navbar/navbar.jsx";
import CustomFooter from "./components/footer/footer.jsx";

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
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <div className="flex flex-col h-screen justify-between">
      <CustomNavbar />
      <div className="flex flex-col items-start justify-center"><RouterProvider router={router} /></div>
      
      <CustomFooter />
    </div>
   
  </React.StrictMode>
);

