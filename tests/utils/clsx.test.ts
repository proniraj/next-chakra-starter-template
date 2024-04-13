import clsx from "../../src/utils/clsx";

describe("clsx", () => {
  it("should return a string", () => {
    expect(clsx("foo", "bar")).toBe("foo bar");
  });

  it("should return a string with nested arrays", () => {
    expect(clsx(["foo", ["bar", "baz"]])).toBe("foo bar baz");
  });

  it("should return a string with nested arrays and falsy values", () => {
    expect(clsx(["foo", ["bar", "baz"], false])).toBe("foo bar baz");
  });

  it("should return a string with nested arrays and empty arrays", () => {
    expect(clsx(["foo", ["bar", "baz"], []])).toBe("foo bar baz");
  });

  it("should return a string with nested arrays and empty arrays and falsy values", () => {
    expect(clsx(["foo", ["bar", "baz"], [], false])).toBe("foo bar baz");
  });

  it("should return empty string with falsy values", () => {
    expect(clsx(false)).toBe("");
  });

  it("should return empty string with empty arrays", () => {
    expect(clsx([])).toBe("");
  });
});
