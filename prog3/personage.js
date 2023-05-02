let LivingCreature = require("./livingcreature")
module.exports = class Personage extends LivingCreature {
  random(found) {
    let result = Math.floor(Math.random() * found.length)
    return found[result];
  }
  mushroom() {
    let grasses = this.chooseCell(1)
  

    let grassEaters = this.chooseCell(2)
    let predators = this.chooseCell(3)
    var all = grasses.concat(grassEaters, predators)
    var rand = this.random(all)

    console.log(grasses);
    let neighX = rand[0];
    let neighY = rand[1];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    // console.log(rand)
    if (matrix[neighY][neighX] ==  0) {
      rand = this.random(all)
    }
    else {
      if (neighX >= 0 && neighX < matrix[0].length && neighY >= 0 && neighY < matrix.length) {
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
        }//splice predator
        matrix[this.y][this.x] = 0
      }
    }
  }
}
