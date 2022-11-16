import { formatMetricKey, getComparatorSymbol, getStatusEmoji, trimTrailingSlash } from "../utils";

describe("getStatusEmoji", () => {
  test("should return check mark with OK when status is `OK`", () => {
    expect(getStatusEmoji("OK")).toBe(":white_check_mark: OK");
  });

  test("should return exclamation mark with Error when status is `ERROR`", () => {
    expect(getStatusEmoji("ERROR")).toBe(":exclamation: Error");
  });

  test("should return warning symbol with Warning when status is `WARN`", () => {
    expect(getStatusEmoji("WARN")).toBe(":warning: Warning");
  });

  test("should return question mark when status is `NONE`", () => {
    expect(getStatusEmoji("NONE")).toBe(":grey_question:");
  });
});

describe("getComparatorSymbol", () => {
  test("should return `>` when comparator is `GT`", () => {
    expect(getComparatorSymbol("GT")).toBe(">");
  });

  test("should return `<` when comparator is `LT`", () => {
    expect(getComparatorSymbol("LT")).toBe("<");
  });

  test("should return empty string on default case", () => {
    expect(getComparatorSymbol("NA")).toBe("");
  });
});

describe("formatMetricKey", () => {
  test("should format from snake_case to separate by space with the first character of the first word in uppercase", () => {
    expect(formatMetricKey("example_metric_key")).toBe("Example metric key");
  });
});

describe("trimTrailingSlash", () => {
  test("should remove trailing slash from the string", () => {
    expect(trimTrailingSlash("/string/with/trailing/slash/")).toBe("/string/with/trailing/slash");
  });

  test("should return the same string when the input does not contains trailing slash", () => {
    expect(trimTrailingSlash("/string/without/trailing/slash")).toBe("/string/without/trailing/slash");
  });
});