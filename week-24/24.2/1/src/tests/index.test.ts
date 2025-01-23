import { describe, expect, it } from "@jest/globals";
import { sum } from "../index";

describe("Testing sum function", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(4);
  });
});
