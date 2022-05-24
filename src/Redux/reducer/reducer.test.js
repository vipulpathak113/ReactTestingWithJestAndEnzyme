import { types } from "../action/types";
import homeReducer from "./homeReducer";

describe("Home Reducer", () => {
  it("should return default state", () => {
    const newState = homeReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state if receiving type", () => {
    const payloadData = [
      { title: "Test1" },
      { title: "Test2" },
      { title: "Test3" },
    ];
    const newState = homeReducer(undefined, {
      type: types.GET_TYPES,
      payload: payloadData,
    });
    expect(newState).toEqual(payloadData);
  });
});
