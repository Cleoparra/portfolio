function drawFlower() {
  var canvas = document.getElementById('myCanvasTwo');
  if (canvas.getContext){
    var context = canvas.getContext('2d');

//center
context.beginPath();
context.arc(144, 80.5, 12 , 0, 2*Math.PI);
context.fillStyle = '#FFFF00';
context.fill();
context.strokeStyle = '#FACC2E';
context.stroke();
context.closePath();

//pedel1
context.beginPath();
context.arc(170, 80.5, 15, 0, 2*Math.PI);
context.fillStyle = '#B404AE';
context.fill();
context.strokeStyle = '#FF00BF';
context.stroke();
context.closePath();

//pedel2
context.beginPath();
context.arc(144, 105.5, 15, 0, 2*Math.PI);
context.fillStyle = '#B404AE';
context.fill();
context.strokeStyle = '#FF00BF';
context.stroke();
context.closePath();

//pedel3
context.beginPath();
context.arc(144, 55.5, 15 , 0, 2*Math.PI);
context.fillStyle = '#B404AE';
context.fill();
context.strokeStyle = '#FF00BF';
context.stroke();
context.closePath();

//pedel4
context.beginPath();
context.arc(118, 80.5, 15, 0, 2*Math.PI);
context.fillStyle = '#B404AE';
context.fill();
context.strokeStyle = '#FF00BF';
context.stroke();
context.closePath();

//pedel5
context.beginPath();
context.arc(128, 98, 13, 0, 2*Math.PI);
context.fillStyle = '#FF00BF';
context.fill();
context.strokeStyle = '#B404AE';
context.stroke();
context.closePath();

//pedel6
context.beginPath();
context.arc(128, 63, 13, 0, 2*Math.PI);
context.fillStyle = '#FF00BF';
context.fill();
context.strokeStyle = '#B404AE';
context.stroke();
context.closePath();

//pedel7
context.beginPath();
context.arc(160, 98, 13, 0, 2*Math.PI);
context.fillStyle = '#FF00BF';
context.fill();
context.strokeStyle = '#B404AE';
context.stroke();
context.closePath();

//pedel8
context.beginPath();
context.arc(160, 63, 13, 0, 2*Math.PI);
context.fillStyle = '#FF00BF';
context.fill();
context.strokeStyle = '#B404AE';
context.stroke();
context.closePath();

//stem
context.beginPath();
context.rect(142.5, 120, 3 ,60);
context.fillStyle = '#21610B';
context.fill();
context.strokeStyle = '#3ADF00';
context.stroke();
context.closePath(); 

}}