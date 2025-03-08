// Your tests here
import { pointsForWord } from "../utils"; // Import function from utils.js

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test"; // t = 2, e = 1, s = 2, t = 2  (Total = 7)
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT"; // Same as "test" but with uppercase letters
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });
});
