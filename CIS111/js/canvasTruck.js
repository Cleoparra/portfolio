function drawTruck() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
  var context = canvas.getContext('2d');



//back wheel
context.beginPath();
context.arc(35, 134.5, 12, 0, 2*Math.PI);
context.fill();
context.closePath();

//front wheel wheel
context.beginPath();
context.arc(185, 134.5, 12, 0, 2*Math.PI);
context.fill();
context.closePath();

//body of truck
context.beginPath();
context.rect(20, 20, 150, 100);
context.stroke(); 
context.closePath();

// Filled triangle
context.beginPath();
context.moveTo(25, 25);
context.lineTo(105, 25);
context.lineTo(25, 105);
context.fill();
context.closePath();

//front top
context.beginPath();
context.moveTo(220, 65);
context.lineTo(173, 19);
context.lineTo(173, 65);
context.closePath();
context.fill();
context.closePath();

//front of truck
context.beginPath();
context.rect(173, 69 ,47 , 50);
context.fill();
context.closePath();

//Road
context.beginPath();
context.rect(0, 147, 300, 60);
context.fillStyle = '#1C1C1C';
context.fill();
context.closePath();

}}
