#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
figlet.defaults({ fontPath: "assets/fonts" });
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Birthday Wish");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
function ready() {
    console.log(figlet.textSync('Happy Birthday Wish '));
}
ready();
async function askQuestionone() {
    let answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "name",
            name: "Name",
            message: "Enter Your Name:"
        },
        {
            type: "name",
            name: "SecondName",
            message: "Name of a Person You Want to Wish a Happy Birthday :"
        },
    ]);
    console.log(chalk.red.yellow.green.bold(`On your birthday ${answers.SecondName}  I wish you success and endless happiness May your sweet smile never fade away. God bless you Ameen`));
    console.log(chalk.hex('#DEADED').bold(`From  ${answers.Name}`));
}
async function startAgain() {
    do {
        await askQuestionone();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
