let LivingCreature = require("./livingcreature")
module.exports = class Snake extends LivingCreature {
  move() {
    if (this.y == 0 && this.x < matrix.length - 1) {
      matrix[this.y][this.x] = 0;
      this.x += 1;
      let a = matrix[this.y][this.x]; //1
      matrix[this.y][this.x] = 4;
    } //this.x = 0 / this.y = 9
    else if (
      this.y < matrix.length &&
      this.x == matrix[0].length - 1 &&
      this.y != matrix.length - 1
    ) {
      matrix[this.y][this.x] = 0;
      this.y += 1;
      matrix[this.y][this.x] = 4;
    } //this.x = 9 / this.y = 9
    else if (
      this.y == matrix.length - 1 &&
      this.x < matrix[0].length &&
      this.x != 0
    ) {
      matrix[this.y][this.x] = 0;
      this.x -= 1;
      matrix[this.y][this.x] = 4;
    } //this.x = 0 / this.y = 9
    else if (this.y <= matrix.length - 1 && this.x == 0) {
      matrix[this.y][this.x] = 0;
      this.y -= 1;
      matrix[this.y][this.x] = 4;
    } //this.x = 0 / this.y = 0
    this.eat();
  }
  eat() {
    for (var i in grassArr) {
      if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
        grassArr.splice(i, 1);
        break;
      }
    }
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1);
        break;
      }
    }
    for (var i in predatorArr) {
      if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
        predatorArr.splice(i, 1);
        break;
      }
    }
  }
}
