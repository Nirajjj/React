import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>hello from jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//react function components
const CompostieHeading = () => <h1>this is function components </h1>;

// component compostion
function ComponentCompostion() {
  return (
    <div>
      <h1>hello</h1>
      <CompostieHeading />
    </div>
  );
}
root.render(<ComponentCompostion />);

// const root = document.getElementById("root");
// ReactDOM.render(div1, root);
