# robot-move-on-table
The application is a simulation of a robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

It is a Node.js project using pure javascript(ES6).

It is a pure console CLI application. All setup, running, testing, input/output can be done in the terminal.

## Setup
1. Install [Node.js](https://nodejs.org/en/) on your machine.
1. Install [Yarn](https://yarnpkg.com/en/docs/install).
1. Clone/Download the project from https://github.com/cowardcalf/robot-move-on-table.git
1. Enter the local directory of the project.
1. Install dependencies by typing `yarn install`.
1. `yarn start` to run. Please follow the prompt on in the console.
1. `yarn test` to test.

## Instruction
This console application that can read in commands of the following form:  

PLACE X,Y,F 
MOVE  
LEFT  
RIGHT  
REPORT  

PLACE will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.  

The origin (0,0) can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command.  

The application should discard all commands in the sequence until a valid PLACE command has been executed.  

MOVE will move the robot one unit forward in the direction it is currently facing.  

LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.  

REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient. A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.  

Input can be from a file, or from standard input, as the developer chooses.  

### Constraints  
The robot must not fall off the table during movement. This also includes the initial placement of the robot. Any move that would cause the robot to fall must be ignored.

### Assumptions
1. Incorrect command would not stop the program.
1. The x/y values of placing could be decimal number.
1. Do not report if commands are invalid including that the robot never been placed.

## Technical Issue

- For testing convinience, it receives commands in one line, seperated by spaces.
Haven't found a way of inputing a copied text with enters via [Inquirer.js](https://github.com/SBoudrias/Inquirer.js).
However, I've implement a runnable version of inputing commands line by line (In branch [input-commands-by-lines](https://github.com/cowardcalf/robot-move-on-table/tree/input-commands-by-lines)). 
It accepts manual input only. (Cannot receive copied texts including enters)
- No unit tests on functions using [chalk](https://github.com/chalk/chalk), [figlet-js](https://github.com/scottgonzalez/figlet-js), [Inquirer.js](https://github.com/SBoudrias/Inquirer.js). Haven't found any suggested way of testing them.

## Test Data
- Any action without placing.
```
Input:  MOVE LEFT RIGHT MOVE REPORT
Output: (Nothing)
```
- Place and valid move.
```
Input:  PLACE 0,0,NORTH MOVE REPORT
Output: 0,1,NORTH

Input:  PLACE 1,0,NORTH MOVE MOVE REPORT
Output: 1,2,NORTH
```
- Place and valid turn & move
```
Input:  PLACE 1,2,EAST MOVE LEFT MOVE RIGHT MOVE MOVE RIGHT REPORT
Output: 4,3,SOUTH

Input:  PLACE 4,4,NORTH LEFT MOVE MOVE LEFT MOVE LEFT REPORT
Output: 2,3,EAST
```
- Place and invalid turn & move
```
Input:  PLACE 0,0,WEST MOVE MOVE LEFT MOVE REPORT
Output: 0,0,SOUTH

Input:  PLACE 4,4,NORTH MOVE RIGHT MOVE MOVE REPORT
Output: 4,4,EAST

Input:  PLACE 3,0,EAST MOVE RIGHT MOVE LEFT LEFT MOVE REPORT
Output: 4,1,NORTH
```
- Place after few of actions
```
Input:  MOVE LEFT MOVE RIGHT MOVE PLACE 2,4,WEST REPORT
Output: 2,4,WEST

Input:  MOVE RIGHT RIGHT MOVE MOVE PLACE 1,3,SOUTH MOVE LEFT MOVE REPORT
Output: 2,2,EAST
```
