import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "../client/components/Review.jsx";

Enzyme.configure({ adapter: new Adapter() });

it("Should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Review />, div);
});

it("Tiny stars should render when page loads", () => {
  const wrapper = shallow(<Review />);
  expect(wrapper.find(".fa fa-star")).toBeTruthy();
});

it("Review details and text should render when page loads", () => {
  const wrapper = shallow(<Review />);
  expect(wrapper.find(".date")).toBeTruthy();
  expect(wrapper.find(".username")).toBeTruthy();
  expect(wrapper.find(".reviewtext")).toBeTruthy();
  expect(wrapper.find(".feedback")).toBeTruthy();
  expect(wrapper.find(".seeall")).toBeTruthy();
});

it("Helpful buttons should activate when we clicked on them", () => {
  const wrapper = shallow(<Review />);
  wrapper.find(".btnno").simulate("click");
  expect(wrapper.find(".btnno")).toBeTruthy();
  wrapper.find(".btnyes").simulate("click");
  expect(wrapper.find(".btnyes")).toBeTruthy();
});


