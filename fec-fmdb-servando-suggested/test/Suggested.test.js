import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "../client/components/MovieList.jsx";
import MovieEntry from "../client/components/MovieEntry.jsx";

Enzyme.configure({ adapter: new Adapter() });

it("MovieList should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieList />, div);
});

// it("MovieEntry should render without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<MovieEntry />, div);
// });

// it("Each entry should animate when hover over it", async () => {
//   const wrapper = await shallow(<MovieEntry />);
//   wrapper.find(".entry").simulate("hover");
//   expect(wrapper.find(".entry")).toBeTruthy();
// });
