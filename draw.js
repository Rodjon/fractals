var canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d");

var X = getRandomInt(0, 300);
var Y = getRandomInt(0, 300);

var x1 = 30;
var y1 = 100;

var x2 = 170;
var y2 = 30;

var x3 = 170;
var y3 = 170;

drawDot(x1, y1);
drawDot(x2, y2);
drawDot(x3, y3);
        

function getMiddlleToX1(x, y){
    var mid_x = (x1 + x)/2
    var mid_y = (y1 + y)/2
    X = mid_x;
    Y = mid_y;
}
function getMiddlleToX2(x, y){
    var mid_x = (x2 + x)/2
    var mid_y = (y2 + y)/2
    X = mid_x;
    Y = mid_y;
}
function getMiddlleToX3(x, y){
    var mid_x = (x3 + x)/2
    var mid_y = (y3 + y)/2
    X = mid_x;
    Y = mid_y;
}


function drawDot(x, y){
    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI*2, false);
    context.fill();
    context.closePath();
    context.stroke();
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var timerId = setInterval(function() {
    var randInt = getRandomInt(1, 300);
    if (randInt < 100){
        getMiddlleToX1(X, Y);
        drawDot(X, Y);
    }
    if ((randInt > 100) && (randInt <= 200 )){
        getMiddlleToX2(X, Y);
        drawDot(X, Y);
    }
    if(randInt > 200){
        getMiddlleToX3(X, Y);
        drawDot(X, Y);
    }
    
  }, 20);
