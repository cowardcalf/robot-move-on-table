const COMMAND_PLACE = 'PLACE';
const COMMAND_MOVE = 'MOVE';
const COMMAND_LEFT = 'LEFT';
const COMMAND_RIGHT = 'RIGHT';
const COMMAND_REPORT = 'REPORT';

/**
 * Apply the commands to the robot
 */
export default class CommandManager {
  /**
   * Construct with robot and the commands
   * @param {Robot} robot
   * @param {string} commands
   */
  constructor(robot, commands) {
    this.robot = robot;
    this.commands = commands.split(' ');
  }

  /**
   * Apply the commands in order
   */
  execute() {
    this.commands.forEach((com, index) => {
      const capCom = com.toUpperCase();
      switch(capCom) {
        case COMMAND_PLACE:
          // get parameters from the next element of the commands array
          const {x, y, face} = this.parsePlaceParams(this.commands[index + 1]);
          this.robot.place(
            x, y, face
          );
          break;
        case COMMAND_MOVE:
          this.robot.move();
          break;
        case COMMAND_LEFT:
          this.robot.left();
          break;
        case COMMAND_RIGHT:
          this.robot.right();
          break;
        case COMMAND_REPORT:
          this.robot.report();
          break;
        default:
          break;
      }
    });
  }

  /**
   * Parse the string of PLACE parameters as x,y,face
   * @param {string} params
   */
  parsePlaceParams(params) {
    const paramsArr = params.split(',');
    if (paramsArr.length === 3) {
      return {x: parseInt(paramsArr[0]), y: parseInt(paramsArr[1]), face: paramsArr[2]};
    }
  }
}