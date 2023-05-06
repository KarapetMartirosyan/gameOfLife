let LivingCreature = require("./livingcreature")
module.exports = class Bomb extends LivingCreature {
  boom() {
    for (let i = 0; i < bombArr.length; i++) {
      if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
        matrix[this.y][this.x]  = 0;
        bombArr.splice(i, 1);
      }
      break;
    } // splice bombs
    for (let i = 0; i < this.directions.length; i++) {
      let neighX = this.directions[i][0];
      let neighY = this.directions[i][1];
      if (
        neighX >= 0 &&
        neighX < matrix[0].length &&
        neighY >=  0 &&
        neighY < matrix.length
      ) {
        matrix[neighY][neighX] = 0;
        for (let i in grassArr) {
          if (neighX == grassArr[i].x && neighY == grassArr[i].y) {
            grassArr.splice(i, 1);
            break;
          }
        } //splice grass
        for (let i in grassEaterArr) {
          if (neighX == grassEaterArr[i].x && neighY == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;
          }
        } //splice grassEaters
        for (let i in predatorArr) {
          if (neighX == predatorArr[i].x && neighY == predatorArr[i].y) {
            predatorArr.splice(i, 1);
            break;
          }
        } //splice predator
      }
    }
  }
}
