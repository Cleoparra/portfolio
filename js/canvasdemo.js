var canvas  = document.getElementById("myCanvas");
var context = canvas.getContext("2d"); 

var radius = 10;
var dragging = false;

context.lineWidth = radius*2;


var putPoint = function(e){
	if (dragging){
		context.lineTo(e.clientX - canvas.offsetLeft + document.body.scrollLeft, e.clientY - canvas.offsetTop + document.body.scrollTop)
		context.stroke();
		context.beginPath();
		context.arc(e.clientX - canvas.offsetLeft + document.body.scrollLeft, e.clientY - canvas.offsetTop + document.body.scrollTop, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath()
		context.moveTo(e.clientX - canvas.offsetLeft + document.body.scrollLeft, e.clientY - canvas.offsetTop + document.body.scrollTop)
	}
}

var engage = function(e){
	dragging = true
	putPoint(e)
}

var disengage = function(){
	dragging = false
	context.beginPath();
}
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);


var locationpageButton = document.getElementById('locationpage');

locationpageButton.addEventListener('click', locationpageInfo);

function locationpageInfo(){
    window.location.href='../html/locationfinal.html'
}
