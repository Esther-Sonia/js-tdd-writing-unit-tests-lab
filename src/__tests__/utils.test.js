import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true for a word that is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a word that is not a palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("should return true for a palindrome with mixed uppercase and lowercase letters", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should throw an error if the input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
  });

  it("should throw an error if the input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
