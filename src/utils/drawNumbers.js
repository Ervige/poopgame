export function drawNumbers(size) {
  if (typeof size !== "number") {
    return;
  }

  return Math.floor(Math.random() * size) + 1;
}
