/**
 * Returns a random number between min (inclusive) and max (inclusive)
 * source: https://futurestud.io/tutorials/generate-a-random-number-in-range-with-javascript-node-js
 */
function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateRandomDate = (): string => {
  const year = randomNumberBetween(2000, 2021);
  const month = randomNumberBetween(0, 11);
  const day = randomNumberBetween(1, 28);

  const date = new Date(year, month, day);

  // return YYYY-MM-DD
  return date.toISOString().slice(0, 10);
};
