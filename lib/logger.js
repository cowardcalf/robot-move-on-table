import chalk from 'chalk';

const logStd = (message) => {
  console.log(
    chalk.blueBright(message)
  );
}

const logDebug = (message) => {
  console.log(message);
}

export { logStd, logDebug };