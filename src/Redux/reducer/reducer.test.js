import { types } from "../action/types";
import postReducer from "./postReducer";

describe("Home Reducer", () => {
  it("should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state if receiving type", () => {
    const payloadData = [
      { title: "Test1" },
      { title: "Test2" },
      { title: "Test3" },
    ];
    const newState = postReducer(undefined, {
      type: types.GET_TYPES,
      payload: payloadData,
    });
    expect(newState).toEqual(payloadData);
  });
});
