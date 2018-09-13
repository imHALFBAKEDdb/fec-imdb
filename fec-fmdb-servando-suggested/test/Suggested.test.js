import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "../client/components/MovieList.jsx";
import MovieEntry from "../client/components/MovieEntry.jsx";

Enzyme.configure({ adapter: new Adapter() });

it("Should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieList />, div);
});
