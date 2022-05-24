import checkPropTypes from "check-prop-types";
import { checkProps, findByTestAttr } from "../../utility/utils";
import CustomButton from ".";
import { shallow } from "enzyme";

describe("Button Test Case", () => {
  describe("Checking props types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "This is a button",
        emitEvent: () => {},
      };

      const errorProps = checkProps(CustomButton, expectedProps);
      expect(errorProps).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        buttonText: "This is a button",
        emitEvent: () => {},
      };

      component = shallow(<CustomButton {...expectedProps} />);
    });

    it("should render custom button", () => {
      const wrapper = findByTestAttr(component, "buttonComponent");
      expect(wrapper.length).toBe(1);
    });
  });
});
