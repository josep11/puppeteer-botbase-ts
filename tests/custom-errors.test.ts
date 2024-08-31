import { isInternetFailedError, isTimeoutError } from "../src";

describe("isInternetFailedError", () => {
  it("should return true if error message includes ERR_INTERNET_DISCONNECTED or ERR_PROXY_CONNECTION_FAILED", () => {
    const err1 = { message: "ERR_INTERNET_DISCONNECTED" };
    const err2 = { message: "ERR_PROXY_CONNECTION_FAILED" };

    expect(isInternetFailedError(err1)).toBe(true);
    expect(isInternetFailedError(err2)).toBe(true);
  });

  it("should return false if error message does not include ERR_INTERNET_DISCONNECTED or ERR_PROXY_CONNECTION_FAILED", () => {
    const err = { message: "Random Error" };

    expect(isInternetFailedError(err)).toBe(false);
  });

  it("should return false if error does not include either", () => {
    const err = { message: null, name: null };

    expect(isInternetFailedError(err)).toBe(false);
  });
});

describe("isTimeoutError", () => {
  it("should return true if error name includes TimeoutError or error message includes TimeoutError or net::ERR_TIMED_OUT", () => {
    const err1 = { message: "TimeoutError", name: "" };
    const err2 = { message: "", name: "TimeoutError" };
    const err3 = { message: "net::ERR_TIMED_OUT", name: "" };

    expect(isTimeoutError(err1)).toBe(true);
    expect(isTimeoutError(err2)).toBe(true);
    expect(isTimeoutError(err3)).toBe(true);
  });

  it("should return false if error name does not include TimeoutError and error message does not include TimeoutError or net::ERR_TIMED_OUT", () => {
    const err = { message: "Random Error", name: "Random Name" };

    expect(isTimeoutError(err)).toBe(false);
  });

  it("should return false if error does not include either", () => {
    const err = { message: null, name: null };

    expect(isTimeoutError(err)).toBe(false);
  });
});
