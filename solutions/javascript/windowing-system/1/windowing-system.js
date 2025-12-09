// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;

  this.resize = function (newwidth, newheight){
    this.width = newwidth;
    this.height = newheight;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();          // 80×60 default
    this.position = new Position();  // (0,0) default
  }

  resize(newSize) {
    const minWidth = 1;
    const minHeight = 1;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const width = Math.min(Math.max(newSize.width, minWidth), maxWidth);
    const height = Math.min(Math.max(newSize.height, minHeight), maxHeight);

    this.size.resize(width, height);
  }

  move(newPosition) {
    const minX = 0;
    const minY = 0;

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const x = Math.min(Math.max(newPosition.x, minX), maxX);
    const y = Math.min(Math.max(newPosition.y, minY), maxY);

    this.position.move(x, y);
  }
}

export function changeWindow(window) {
  const newSize = { width: 400, height: 300 };
  const newPosition = { x: 100, y: 150 };

  window.resize(newSize);
  window.move(newPosition);

  return window;
}
