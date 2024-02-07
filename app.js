import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const FullPage = () => (
  <div className="fullpage">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FullPage />);

// const root = document.getElementById("root");
// ReactDOM.render(div1, root);
