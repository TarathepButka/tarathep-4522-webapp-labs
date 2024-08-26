let createMultiplier = (num1) => (num2) => num1 * num2;

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));