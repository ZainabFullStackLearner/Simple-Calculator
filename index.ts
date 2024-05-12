#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\t Welcome to codewithZainab-CLI simple calculator\n");
// asking questions from user through inquirer;
const answer = await inquirer.prompt([
  { massage: "Enter first number", type: "number", name: "firstnumber" },
  { massage: "Enter second number", type: "number", name: "secondnumber" },
  {
    massage: "select one of the operator to perform function",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
  // conditional statement;
]);
if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}
