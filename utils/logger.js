/**
 * Console output utilities.
 * Using chalk.
 */

import chalk from 'chalk';

/**
 * Standard output, colour bright blue
 * @param {string} message
 */
const logStd = (message) => {
  console.log(
    chalk.blueBright(message)
  );
}

/**
 * Simply console log out.
 * @param {string} message
 */
const logDebug = (message) => {
  console.log(message);
}

export { logStd, logDebug };