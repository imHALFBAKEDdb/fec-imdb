import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../client/components/NavBar.jsx";

it("Should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});
