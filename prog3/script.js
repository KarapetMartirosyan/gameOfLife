var soket = io()



var side = 35;
function setup() {
  frameRate(20);
  createCanvas(50 * side, 50 * side);
  button1 = document.getElementById('summer');
  button2 = document.getElementById('spring');
  button3 = document.getElementById('autumn');
  button4 = document.getElementById('winter');
  button1.addEventListener("click" , onSocket);
  button2.addEventListener("click" , onSocket2);
  button3.addEventListener("click" , onSocket3);
  button4.addEventListener("click" , onSocket4);
}
function onSocket(){
  soket.on("send matrix", summer)
}
function onSocket2(){
  soket.on("send matrix", spring)
}
function onSocket3(){
  soket.on("send matrix", autumn)
}
function onSocket4(){
  soket.on("send matrix", winter)
}
function stateGenerator(data){
  let grass = document.getElementById("grass")
  let grassEater = document.getElementById("grassEater")
  let predator = document.getElementById("predator")
  grass.innerHTML = "GrassCount: "  + data.grasses;
  grassEater.innerHTML = "GrassEaterCount: "  + data.grassEaters;
  predator.innerHTML = "PredatorCount: "  + data.predators;
  console.log(data);
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
function statewinter(matrix) {
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


