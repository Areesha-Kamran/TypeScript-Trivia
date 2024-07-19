#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

import chalkAnimation from "chalk-animation";

async function welcome () {
    let title = chalkAnimation.rainbow("\t\t\t\tWelcome to TypeScriptTrivia!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()

let ans = await inquirer.prompt(
    [
        {
            name:"name",
            type:"input",
            message:console.log((chalk.rgb(204,153,255))("Please Enter Your Name:")),
        }
    ]
);


const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt(
    [
        {
            name:"question_1",
            type:"list",
            message:(chalk.rgb(0,255,255))("Q1.What is the correct way to check if two values are not equal in TypeScript?"),
            choices:["a == b","a === b","a = b","a !== b"]
        },
        {
            name:"question_2",
            type:"list",
            message:(chalk.rgb(0,0,255))("Q2.Which of the following characters is commonly allowed in variable names in TypeScript?"),
            choices:["$","@","#","&"]
        },
        {
            name:"question_3",
            type:"list",
            message:(chalk.rgb(0,255,255))("Q3.Which operator is commonly used for string concatenation in TypeScript?"),
            choices:["+","-","*","/"]
        },
        {
            name:"question_4",
            type:"list",
            message:(chalk.rgb(0,0,255))("Q4.In TypeScript, which symbol is commonly used to terminate a statement?"),
            choices:[".",":",";",","]
        },
        {
            name:"question_5",
            type:"list",
            message:(chalk.rgb(0,255,255))("Q5.Which method of Inquirer.js is used to start the prompt interface and receive user input?"),
            choices:["start()","prompt()","init()","run()"]
        },
    ]
)

let score:number = 0;

switch(quiz.question_1){
    case "a !== b":
        console.log(chalk.green("1. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("1. Incorrect!"));
}

switch(quiz.question_2){
    case "$":
        console.log(chalk.green("2. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("2. Incorrect!"));
}

switch(quiz.question_3){
    case "+":
        console.log(chalk.green("3. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("3. Incorrect!"));
}

switch(quiz.question_4){
    case ";":
        console.log(chalk.green("4. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("4. Incorrect!"));
}

switch(quiz.question_5){
    case "prompt()":
        console.log(chalk.green("5. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("5. Incorrect!"));
}

console.log((chalk.rgb(255,0,255))(`Score: ${score}`));
