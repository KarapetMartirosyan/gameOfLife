let LivingCreature = require("./livingcreature")
module.exports = class Grass extends LivingCreature {
  mul(multi) {
    // console.log(multi);
    this.multiplay++;
    var newCell = this.random(0);
    if (newCell && this.multiplay >= multi)   { 
      var newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[0]][newCell[1]] = 1;
      this.multiplay = 0;
    }
  }
}
