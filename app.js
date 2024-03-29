import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/about";
import Contact from "./src/components/contactUs";
import Error from "./src/components/error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Resinfo from "./src/components/restaurantInfo";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import CartItems from "./src/components/CartItems";

const FullPage = () => (
  <Provider store={appStore}>
    <div className="fullpage">
      <Header />
      <Outlet />
    </div>
  </Provider>
);

const approutes = createBrowserRouter([
  {
    path: "/",
    element: <FullPage />,
    children: [
      {
        path: "/",
        element: <Body />,
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
      {
        path: "/restaurant/:resID",
        element: <Resinfo />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <CartItems />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approutes} />);

// const root = document.getElementById("root");
// ReactDOM.render(div1, root);
