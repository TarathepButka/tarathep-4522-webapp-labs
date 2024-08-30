let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = (arr) => arr.map(x => x * 2);
let calculateSum = (arr) => arr.reduce((a, b) => a + b, 0);

let doubledNumbers = doubleNumbers(numbers);
let sum = calculateSum(doubledNumbers);

const person = {
    name: "John",
    age: 30,
    introduce: function () {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    }
};

console.log("The sum of doubled numbers is: " + sum);
console.log(person.introduce());
