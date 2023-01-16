const bracket = require("./Bracket");
test("should return true when open and closed bracket", () => {
  expect(bracket.checkBrackets("{}")).toBe(true);
});

test("should return true when empty string", () => {
  expect(bracket.checkBrackets("")).toBe(true);
});

test("should return true and ignore non-bracket characters", () => {
  expect(bracket.checkBrackets("abcdefghij")).toBe(true);
});

test("should return false when closed and open bracket", () => {
  expect(bracket.checkBrackets("}{")).toBe(false);
});

test("should return false when one bracket pair was not closed", () => {
  expect(bracket.checkBrackets("{{}")).toBe(false);
});
