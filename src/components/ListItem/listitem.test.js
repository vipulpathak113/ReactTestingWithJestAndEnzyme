import { checkPropTypes } from "prop-types";
import { checkProps, findByTestAttr } from "../../utility/utils";
import ListItem from ".";
import { shallow } from "enzyme";

describe("Testing List Item Component", () => {
  describe("Checking prop types", () => {
    it("should not show warning", () => {
      const expectedProps = {
        title: "This is a title",
        desc: "This is a desc",
      };

      const errorProps = checkProps(ListItem, expectedProps);
      expect(errorProps).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        title: "This is a title",
        desc: "This is a desc",
      };

      component = shallow(<ListItem {...expectedProps} />);
    });

    it("List Item should render", () => {
      let wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Title should render", () => {
      let wrapper = findByTestAttr(component, "titleComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Description should render", () => {
      let wrapper = findByTestAttr(component, "descComponent");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        desc: "This is a desc",
      };

      component = shallow(<ListItem {...expectedProps} />);
    });

    it("List Item should not render if title not present", () => {
      let wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
