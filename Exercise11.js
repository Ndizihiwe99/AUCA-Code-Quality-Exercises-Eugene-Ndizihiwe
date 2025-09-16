function recursiveSumOfElements(Array) {
  return Array.length === 0
    ? 0
    : Array[0] + recursiveSumOfElements(Array.slice(1));
}

console.log(recursiveSumOfElements([5, 5]));
