#!/usr/bin/env node
import inquirer from "inquirer";
const ramdomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === ramdomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
