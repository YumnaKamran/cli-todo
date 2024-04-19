#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What would you like to add in  your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todo?",
        }
    ]);
    todos.push(addTask.firstName);
    console.log(todos);
    condition = addTask.secondQuestion;
}
