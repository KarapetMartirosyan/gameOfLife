class Grass extends LivingCreature {
  mul() {
    this.multiplay++;
    var newCell = random(this.chooseCell(0));
    if (newCell && this.multiplay >= 4) {
      var newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[0]][newCell[1]] = 1;
      this.multiplay = 0;
    }
  }
}
