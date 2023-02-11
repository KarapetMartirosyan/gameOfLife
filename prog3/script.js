var side = 35;
let grassArr = [];
let grassEaterArr = [];
matrix = [];
let predatorArr = [];
let bombArr = [];
function setup() {
  frameRate(20);
  function matrixGenerator(
    size,
    countGrass,
    countGrassEater,
    countPredator,
    countBomb
  ) {
    for (let i = 0; i < size; i++) {
      matrix.push([]);
      for (let j = 0; j < size; j++) {
        matrix[i].push(0);
      }
    }
    for (let i = 0; i < countGrass; i++) {
      let x = Math.floor(random(size));
      let y = Math.floor(random(size));
      matrix[x][y] = 1;
    }
    for (let i = 0; i < countGrassEater; i++) {
      let x = Math.floor(random(size));
      let y = Math.floor(random(size));
      matrix[x][y] = 2;
    }
    for (let i = 0; i < countPredator; i++) {
      let x = Math.floor(random(size));
      let y = Math.floor(random(size));
      matrix[x][y] = 3;
    }
    for (let i = 0; i < countBomb; i++) {
      let x = Math.floor(random(size));
      let y = Math.floor(random(size));
      if (x != 0 && x != matrix.length && y != 0 && y != matrix.length) {
        matrix[x][y] = 5;
      }
    }
    matrix[0][0] = 4;
  }
  matrixGenerator(24, 50, 7, 5, 7);
  background("#acacac");
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let grass = new Grass(x, y);
        grassArr.push(grass);
      } else if (matrix[y][x] == 2) {
        let grassEater = new GrassEater(x, y);
        grassEaterArr.push(grassEater);
      } else if (matrix[y][x] == 3) {
        let predator = new Predator(x, y);
        predatorArr.push(predator);
      } else if (matrix[y][x] == 5) {
        let bomb = new Bomb(x, y);
        bombArr.push(bomb);
      }
    }
  }
  createCanvas(matrix[0].length * side, matrix.length * side);
  snake = new Snake(0, 0);
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill("blue");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 5) {
        fill("black");
        rect(x * side, y * side, side, side);
      }
    }
  }
  for (let i = 0; i < grassArr.length; i++) {
    grassArr[i].mul();
  }
  for (let i = 0; i < grassEaterArr.length; i++) {
    grassEaterArr[i].eat();
  }
  for (let i = 0; i < grassEaterArr.length; i++) {
    grassEaterArr[i].mul();
  }
  for (let i = 0; i < predatorArr.length; i++) {
    predatorArr[i].eat();
  }
  // for(let i = 0; i < bombArr.length; i++){
  //     bombArr[i].boom()
  // }
  snake.move();
}

function aa() {
  for (let i = 0; i < bombArr.length; i++) {
    bombArr[i].boom();
  }
}
setInterval(aa, 3000);
