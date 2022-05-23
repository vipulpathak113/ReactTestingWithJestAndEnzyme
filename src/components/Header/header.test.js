import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../utility/utils";

describe("Testing Header Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it("Component should render without crash", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
});
