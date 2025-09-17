function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;

  let sum = numbers.reduce(
    (accumilator, curretntValue) => accumilator + curretntValue,
    0
  );
  let average = sum / numbers.length;

  return average;
}
