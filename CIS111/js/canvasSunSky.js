var canvas;
var context;
var image;
var imageX = 300;
var imageY;
var imageDX = 3;
var imageDY = 2;

function drawSunSky() {
  canvas  = document.getElementById("myCanvasThree");
  context = canvas.getContext("2d");
  image = new Image();
  image.src = "../images/sunandstars.gif";

image.onload = function() {
  var aspectRatio = image.width/image.height;
  var invAspectRatio = 1.0/aspectRatio;
  var width = 150;
  imageX = 10;
  imageY = 10;
  image.width = width;
  image.height = invAspectRatio*width;
        
  setInterval(redraw, 50);
}


function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  imageX += imageDX;
  imageY += imageDY;
  if (imageX < 0 || imageX + image.width > canvas.width) {
    imageDX = -imageDX;
}
  if (imageY < 0 || imageY + image.height > canvas.height) {
    imageDY = -imageDY;
}
context.drawImage(image, imageX, imageY,
  image.width, image.height);

//Cloud from HTML5 Canvas Tutorials
//This cloud is not mine
//http://www.html5canvastutorials.com/tutorials/html5-canvas-custom-shapes/
//cloud one
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);

// color
context.closePath();
context.lineWidth = 5;
context.fillStyle = '#8ED6FF';
context.fill();
context.strokeStyle = 'blue';
context.stroke();

}}

