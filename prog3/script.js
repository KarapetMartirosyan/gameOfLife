var soket = io()



var side = 35;
function setup() {
  frameRate(20);
  createCanvas(50 * side, 50 * side);
  button1 = document.getElementById('summer');
  button2 = document.getElementById('spring');
  button3 = document.getElementById('autumn');
  button4 = document.getElementById('winter');
  evt = document.getElementById("forEvent");
  restart = document.getElementById("restart");
  grassAdder = document.getElementById("addingGrass");
  grassAdderEater = document.getElementById("addingGrassEater");
  button1.addEventListener("click" , onSocket);
  button2.addEventListener("click" , onSocket2);
  button3.addEventListener("click" , onSocket3);
  button4.addEventListener("click" , onSocket4);
  evt.addEventListener("click", event1);
  restart.addEventListener("click",resting);
  grassAdder.addEventListener("click",adding);
  grassAdderEater.addEventListener("click",addingGE);



  window.addEventListener("keydown", function(evt){
    if(evt.key==="r"){
      resting()
    }
  })
  window.addEventListener("keydown", function(evt){
    if(evt.key==="p"){

      event1()
    }
  })
}

function resting(){
  soket.emit("restarting", true)
}

function adding(){
  soket.emit("adding", true)
}
function addingGE(){
  soket.emit("addingGE", true)
}

function event1(){
  soket.emit("signal", true)
}


function onSocket(){
  soket.on("send matrix", summer)
  soket.emit("weather",3)

}
function onSocket2(){
  soket.on("send matrix", spring)
  soket.emit("weather",4)

}
function onSocket3(){
  soket.on("send matrix", autumn)
  soket.emit("weather",6)

}
function onSocket4(){
  soket.on("send matrix", winter)
  soket.emit("weather",10)

}
function stateGenerator(data){
  let grass = document.getElementById("grass")
  let grassEater = document.getElementById("grassEater")
  let predator = document.getElementById("predator")
  grass.innerHTML = "GrassCount: "  + data.grasses;
  grassEater.innerHTML = "GrassEaterCount: "  + data.grassEaters;
  predator.innerHTML = "PredatorCount: "  + data.predators;
}
soket.on("send state", stateGenerator)


function summer(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("#2a5904");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#86d975");
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
      else if (matrix[y][x] == 6) {
        fill("white");
        rect(x * side, y * side, side, side);
      }
    }
  }
}
function autumn(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("#9ef507");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#f3fc90");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill("#f59e07");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill("#48084f");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill("#0d59ff");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 5) {
        fill("black");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 6) {
        fill("white");
        rect(x * side, y * side, side, side);
      }
    }
  }
}
function winter(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("#32b354");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("white");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill("#848c3e");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill("#059bff");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 5) {
        fill("black");
        rect(x * side, y * side, side, side);
      }
    }
  }
}
function spring(matrix) {
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
      else if (matrix[y][x] == 6) {
        fill("white");
        rect(x * side, y * side, side, side);
      }
    }
  }
}
function draww(matrix) {
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
      else if (matrix[y][x] == 6) {
        fill("white");
        rect(x * side, y * side, side, side);
      }
    }
  }


 

}
soket.on("send matrix", draww)


