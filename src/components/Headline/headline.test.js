import Headline from ".";
import { checkProps } from "../../utility/utils";

describe("Testing Headline Component", () => {
  describe("Testing prop types", () => {
    it("Should not show warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const errorProp = checkProps(Headline, expectedProps);
      expect(errorProp).toBeUndefined();
    });
  });
});
