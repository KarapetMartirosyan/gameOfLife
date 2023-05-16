let LivingCreature = require("./livingcreature")
module.exports = class Predator extends LivingCreature {

  chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  eat() {

    let grasses = this.chooseCell(1);
    let grassEaters = this.chooseCell(2);
    let all = grasses.concat(grassEaters);
    let oneCharecter = this.random(all);
    if (oneCharecter) {
      let oneCharecterX = oneCharecter[0];
      let oneCharecterY = oneCharecter[1];
      matrix[oneCharecterY][oneCharecterX] = 3;
      matrix[this.y][this.x] = 0;
      this.y = oneCharecterY;
      this.x = oneCharecterX;
      for (var i in grassArr) {
        if (oneCharecterX == grassArr[i].x && oneCharecterY == grassArr[i].y) {
          grassArr.splice(i, 1);

          break;
        }
      }
      for (var i in grassEaterArr) {
        if (
          oneCharecterX == grassEaterArr[i].x &&
          oneCharecterY == grassEaterArr[i].y
        ) {
          grassEaterArr.splice(i, 1);
          break;
        }
      }
    } else {
      this.move();
    }
  }
  move() {
    // let emptyCells = this.chooseCell(0);
    let oneEmptyCell = this.random(0);
    if (oneEmptyCell) {
      matrix[this.y][this.x] = 0;
      let neighX = oneEmptyCell[0];
      let neighY = oneEmptyCell[1];
      matrix[neighY][neighX] = 3;
      this.y = neighY;
      this.x = neighX;
    }
  }
}
