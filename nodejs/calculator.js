import inquirer from "inquirer";
const args = process.argv.slice(2);

var questions = [
  { type: "input", name: "operator", message: "add | subtract" },
];

if (args.length < 2 || isNaN(args[0]) || isNaN(args[1])) {
  console.log("Please enter two numbers");
  process.exit(1);
}

inquirer.prompt(questions).then((operator) => {
  const num1 = parseFloat(args[0]);
  const num2 = parseFloat(args[1]);
  if (operator.operator === "add") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (operator.operator === "subtract") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else {
    console.log("Unknown operator");
  }
});
