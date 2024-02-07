import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/about";
import Contact from "./src/components/contactUs";
import Error from "./src/components/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const FullPage = () => (
  <div className="fullpage">
    <Header />
    <Body />
  </div>
);

const approutes = createBrowserRouter([
  {
    path: "/",
    element: <FullPage />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approutes} />);

// const root = document.getElementById("root");
// ReactDOM.render(div1, root);
