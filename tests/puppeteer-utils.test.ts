import { CookieData } from "puppeteer";

import { objectArrayToCookieParamArray } from "../src";

describe("objectArrayToCookieParamArray Function", () => {
  /* Test 01: Validate that the function correctly processes valid input. */
  it("should correctly convert an array of cookie objects to an array of CookieData objects", () => {
    const testCookies = [
      {
        name: "cookie1",
        value: "testValue1",
        secure: true,
        httpOnly: false,
      },
      {
        name: "cookie2",
        value: "testValue2",
        secure: false,
        httpOnly: true,
      },
    ] as object[];

    const expectedResult = [
      {
        name: "cookie1",
        value: "testValue1",
        secure: true,
        httpOnly: false,
      },
      {
        name: "cookie2",
        value: "testValue2",
        secure: false,
        httpOnly: true,
      },
    ] as CookieData[];

    const actualResult = objectArrayToCookieParamArray(testCookies);
    expect(actualResult).toEqual(expectedResult);
  });

  /* Test 02: Validate the behavior of the function when passed an empty array. */
  it("should return an empty array when passed an empty array", () => {
    const testCookies = [] as object[];
    const expectedResult = [] as CookieData[];
    const actualResult = objectArrayToCookieParamArray(testCookies);
    expect(actualResult).toEqual(expectedResult);
  });
});
