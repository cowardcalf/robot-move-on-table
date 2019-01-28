import chalk from 'chalk';
import figlet from 'figlet';
import Table from './models/Table.js';
import CommandManager from './controllers/CommandManager.js';
import Robot from './models/Robot.js';
import { receiveCommands } from './utils/input.js';

/**
 * Initialise the necessary objects and controller
 * @param {String} commandsStr
 * @return {CommandManager}
 */
const initObjects = (commands) => {
  const table = new Table();
  const robot = new Robot(table);
  const manager = new CommandManager(robot, commands);
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
  const commands = await receiveCommands();
  // initialise objects
  const manager = initObjects(commands);
  // execute commands
  manager.execute();
};

run();