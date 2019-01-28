import inquirer from 'inquirer';
import { logStd } from './logger';

/**
 * Show the prompt to input commands
 * @return {Promise}
 */
const commandPrompt = () => {
  const config = [
    {
      name: "command",
      type: "input",
      message: "command:"
    }
  ];
  return inquirer.prompt(config);
};

/**
 * Receive each command until an empty command entered
 * @return {Promise<Array>}
 */
const receiveCommands = async () => {
  logStd('Please input each command following an enter: (empty command will finish the input)');
  let recentCommand = '';
  let consoleInput = null;
  let commandsArr = [];
  do {
    consoleInput = await commandPrompt();
    recentCommand = consoleInput.command;
    if (recentCommand !== '') {
      commandsArr.push(recentCommand);
    }
  }
  while (recentCommand !== '');
  return commandsArr;
};

export { receiveCommands };
