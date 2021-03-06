import {
  sum
} from "./calculator"

it("should sum 2 and 2 the result must be 4", () => {
  //! validation if the test is working
  // expect(sum(2, 2)).not.toBe(4)

  expect(sum(2, 2)).toBe(4)
});

it("should sum 2 and 2 even if one the them is a string and the result must be 4", () => {
  expect(sum("2", "2")).toBe(4)
});

it("  ", () => {
  expect(() => {
    sum("", "2")
  }).toThrowError()

  expect(() => {
    sum([2, 2])
  }).toThrowError()

  expect(() => {
    sum()
  }).toThrowError()
});