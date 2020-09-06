import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Account from "./Account";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders App header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Account component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Account user='duy' />)).toEqual(true);
});
