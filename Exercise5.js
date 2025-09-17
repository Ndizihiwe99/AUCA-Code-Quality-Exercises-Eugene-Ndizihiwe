function calculateFactorial(number) {
  return number === 0 ? 1 : number * calculateFactorial(number - 1);
}
