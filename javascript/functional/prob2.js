function getMiddleElements(arr) {
    let middle = arr.length / 2;
    if (arr.length % 2 === 0) { return arr.slice(middle - 1, middle + 1) } else { return arr.slice(middle, middle + 1) }
}
console.log(getMiddleElements([1, 2, 3, 4, 5]));
console.log(getMiddleElements([1, 2, 3, 4]));
console.log(getMiddleElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


