let LivingCreature = require("./livingcreature")
module.exports = class GrassEater extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 5;
  }
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
  move() {
    if (this.energy > 0) {
      this.getNewCoordinates();
      this.energy--;
      // let emptyCells = this.chooseCell(0);
      let oneEmptyCell = this.random(0);
      if (oneEmptyCell) {
        matrix[this.y][this.x] = 0;
        let neighX = oneEmptyCell[0];
        let neighY = oneEmptyCell[1];
        matrix[neighY][neighX] = 2;
        this.y = neighY;
        this.x = neighX;
      }
    } else {
      this.die();
    }
  }
  eat() {
    this.getNewCoordinates();
    // let grasses = this.chooseCell(1);
    let oneGrass = this.random(1);
    if (oneGrass) {
      this.energy += 2;
      let oneGrassX = oneGrass[0];
      let oneGrassY = oneGrass[1];
      matrix[oneGrassY][oneGrassX] = 2;
      matrix[this.y][this.x] = 0;
      this.y = oneGrassY;
      this.x = oneGrassX;
      for (var i in grassArr) {
        if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {

          grassArr.splice(i, 1);

          break;
        }
      }
    } else {
      this.move();
    }
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1);
        break;
      }
    }
  }
  mul() {
    if (this.energy > 10) {
      var newCell = this.random(0);
      if (newCell) {
        var newGrassEater = new GrassEater(newCell[0], newCell[1]);
        grassEaterArr.push(newGrassEater);
        matrix[newCell[1]][newCell[0]] = 2;
        this.energy = this.energy - 10;
      }
    }
  }
}
