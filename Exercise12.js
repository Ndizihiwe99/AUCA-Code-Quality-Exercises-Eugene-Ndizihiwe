function removeDuplicate(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4]));
