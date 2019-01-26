import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';

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
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { commands } = answers;
  console.log(
    chalk.blueBright(`Commands: ${commands}`)
  )
};

run();