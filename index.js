import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import Table from './Models/Table.js';
import CommandManager from './Controllers/CommandManager.js';
import Robot from './Models/Robot.js';

/**
 * Show the prompt to input commands
 * @return {Promise}
 */
const prompt = () => {
  const questions = [
    {
      name: "commands",
      type: "input",
      message: "Please input the commands (separated by space):"
    }
  ];
  return inquirer.prompt(questions);
};

/**
 * Initialise the necessary objects and controller
 * @param {String} commandsStr
 * @return {CommandManager}
 */
const initObjects = (commandsStr) => {
  const table = new Table();
  const robot = new Robot(table);
  const manager = new CommandManager(robot, commandsStr);
  return manager;
}

/**
 * Show the introduction of this program
 */
const opening = () => {
  console.log(
    chalk.green(
      figlet.textSync("Robot Move on Table", {
        font: "standard",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

/**
 * The entrance of this program
 */
const run = async () => {
  // show introduction
  opening();
  // receive commands
  const consoleInputs = await prompt();
  const { commands } = consoleInputs;
  // initialise objects
  const manager = initObjects(commands);
  // execute commands
  manager.execute();
};

run();