var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000)

let Grass = require("./grass")
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let Snake = require("./snake")
let Bomb = require("./bomb")
let Personage = require("./personage")

function getRandInt(min, max) {
   var z = Math.floor(Math.random() * (max - min + 1)) + min;
   return z;
}

grassArr = [];
grassEaterArr = [];
matrix = [];
predatorArr = [];
bombArr = [];
personageArr = []
function matrixGenerator(size, countGrass, countGrassEater, countPredator, countBomb, countPersonage,a) {
   for (let i = 0; i < size; i++) {
      matrix.push([]);
      for (let j = 0; j < size; j++) {
         matrix[i].push(0);
      }
   }
   for (let i = 0; i < countGrass; i++) {
      let x = Math.floor(getRandInt(0, size - 1));
      let y = Math.floor(getRandInt(0, size - 1));
      matrix[x][y] = 1;
   }
   for (let i = 0; i < countGrassEater; i++) {
      let x = Math.floor(getRandInt(0, size - 1));
      let y = Math.floor(getRandInt(0, size - 1));
      matrix[x][y] = 2;
   }
   for (let i = 0; i < countPredator; i++) {
      let x = Math.floor(getRandInt(0, size - 1));
      let y = Math.floor(getRandInt(0, size - 1));
      matrix[x][y] = 3;
   }
   for (let i = 0; i < countBomb; i++) {
      let x = Math.floor(getRandInt(0, size - 1));
      let y = Math.floor(getRandInt(0, size - 1));
      if (x != 0 && x != matrix.length && y != 0 && y != matrix.length) {
         matrix[x][y] = 5;
      }
   }
   for (let i = 0; i < countPersonage; i++) {
      let x = Math.floor(getRandInt(0, size - 1));
      let y = Math.floor(getRandInt(0, size - 1));
      if (x >= 0 && x <= matrix[0].length && y >= 0 && y <= matrix.length) {
         matrix[x][y] = 6;
      }
   }
   matrix[0][0] = a;
   io.emit("send matrix", matrix)
}
matrixGenerator(24, 50, 10, 2, 3, 5,4);
function createObj() {
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
         } else if (matrix[y][x] == 6) {
            let personage = new Personage(x, y);
            personageArr.push(personage);
         }
      }
   }
   snake = new Snake(0, 0);
   io.emit("send matrix", matrix)

}
var mult = 4

createObj()


function game() {
   for (let i = 0; i < grassArr.length; i++) {
      grassArr[i].mul(mult);
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

   state = {
      grasses: grassArr.length,
      grassEaters: grassEaterArr.length,
      predators: predatorArr.length,
   }
   fs.writeFileSync('state.json', JSON.stringify(state, undefined, 2))

   myState = fs.readFileSync('state.json').toString()
// console.log(grassArr.length);
 
   io.emit("send state", JSON.parse(myState))
   snake.move();
   io.emit("send matrix", matrix)

}
function aa() {
   for (let i = 0; i < bombArr.length; i++) {
      bombArr[i].boom();
   }
}

function mushrooms() {
   for (let i = 0; i < personageArr.length; i++) {
      // console.log(personageArr.length);
      personageArr[i].mushroom();
   }
}

let a;

a = setInterval(game, 500)
io.on('connection', function (socket) {
 
   socket.on("signal",event1)
   socket.on("restarting", restart)
   socket.on("weather", function (data) {
      mult = data
   });
});
setInterval(mushrooms, 10000)
setInterval(aa, 3000);

count  = 0
function event1(){
   
   count++
   if(count%2==0){
     a = setInterval(game,500)
   }
   else if(count%2!=0){
     clearInterval(a)
   }
}
 
function restart(){
   grassArr = [];
   grassEaterArr = [];
   matrix = [];
   predatorArr = [];
   bombArr = [];
   personageArr = []  
   matrixGenerator(24, 0, 0, 0, 0, 0,0);
   matrix = []

   setTimeout(()=>{
      matrixGenerator(24, 50, 10, 2, 3, 5,4)
      createObj()
   }, 500)
}
