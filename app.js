const heading = React.createElement(
  "h1",
  { id: "heading", id: "heading1" },
  "hello world from React"
);

const div1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "hello from h1"),
    React.createElement("h2", { id: "h2" }, "hello from h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h12" }, "hello from h1"),
    React.createElement("h2", { id: "h22" }, "hello from h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div1);

// const root = document.getElementById("root");
// ReactDOM.render(div1, root);
