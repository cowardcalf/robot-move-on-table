import { logStd } from './lib/logger.js';

const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const NUM_OF_DIRECTIONS = DIRECTIONS.length;

export default class Robot {
  constructor(table) {
    this.maxX = table.width - 1;
    this.maxY = table.height - 1;
    this.x = 0;
    this.y = 0;
    this.face = 0;
    this.hasBeenPlaced = false;
  }

  place(x, y, face) {
    if (this.validatePosition(x, y)) {
      this.x = x;
      this.y = y;
      // Assume keeping previous/default facing
      // if face value is invalid
      const faceIndex = DIRECTIONS.indexOf(face);
      if ( faceIndex >= 0) {
        this.face = faceIndex;
      }
      this.hasBeenPlaced = true;
    }
  }

  move() {
    if (this.hasBeenPlaced) {
      let newX = this.x;
      let newY = this.y;
      if (this.face % 2 === 0) {
        newY += (this.face === 0) ? 1 : -1;
      } else {
        newX += (this.face === 1) ? 1 : -1;
      }
      if (this.validatePosition(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  }


  left() {
    if (this.hasBeenPlaced) {
      this.face = (this.face + NUM_OF_DIRECTIONS - 1) % NUM_OF_DIRECTIONS;
    }
  }

  right() {
    if (this.hasBeenPlaced) {
      this.face = (this.face + 1) % NUM_OF_DIRECTIONS;
    }
  }

  /**
   *  Assume not reporting if the robot never been placed
   */
  report() {
    console.log('report');
    if (this.hasBeenPlaced) {
      logStd(`${this.x},${this.y},${DIRECTIONS[this.face]}`);
    }
  }

  validatePosition(x, y) {
    return (x >= 0 && x <= this.maxX) && (y >= 0 && y <= this.maxY)
  }
}