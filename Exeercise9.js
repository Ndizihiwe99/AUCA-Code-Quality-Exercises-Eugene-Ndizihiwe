function calculateMatrixSum(matrix) {
  return matrix.reduce((accumulator, row) => {
    return accumulator + row.reduce((rowSum, number) => rowSum + number, 0);
  }, 0);
}

console.log(
  calculateMatrixSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
