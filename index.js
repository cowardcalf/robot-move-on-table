import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import Table from './Table';
import CommandManager from './CommandManager.js';
import Robot from './Robot.js';
import { logStd, logDebug } from './lib/logger.js';

const askQuestions = () => {
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
 * Parse and transform the string of commands into array
 * @param {string} answersString
 */
const parseCommands = (answersString) => {
  return answersString.split(' ');
}

const initObjects = (commandsStr) => {
  const table = new Table();
  const robot = new Robot(table);
  const manager = new CommandManager(robot, commandsStr);
  return manager;
}

const init = () => {
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

const run = async () => {
  // show introduction
  init();

  // ask commands
  const answers = await askQuestions();
  const { commands } = answers;
  logStd(`Commands: ${parseCommands(commands)}`);
  const manager = initObjects(commands);
  // logDebug(manager);
  manager.execute();
};

run();