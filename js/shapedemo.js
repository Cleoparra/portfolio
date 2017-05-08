var canvas  = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


//cat
var catImageButton = document.getElementById('cat');
	catImageButton.addEventListener('click', addCatImage);

var catimage   = new Image();
catimage.src = "../images/cat.gif"

function addCatImage(){
	context.drawImage(catimage,  0, 0, 500, 400); 
} 

//dog
var dogImageButton = document.getElementById('dog');
	dogImageButton.addEventListener('click', addDogImage);

var dogimage   = new Image();
dogimage.src = "../images/dog.gif"

function addDogImage(){
	context.drawImage(dogimage,  0, 0, 500, 400); 
} 

//turtle
var turtleImageButton = document.getElementById('turtle');
	turtleImageButton.addEventListener('click', addTurtleImage);

var turtleimage   = new Image();
turtleimage.src = "../images/turtle.gif"

function addTurtleImage(){
	context.drawImage(turtleimage,  0, 0, 500, 400); 
} 

//elephants
var elephantsImageButton = document.getElementById('elephants');
	elephantsImageButton.addEventListener('click', addelephantsImage);

var elephantsimage   = new Image();
elephantsimage.src = "../images/elephants.gif"

function addelephantsImage(){
	context.drawImage(elephantsimage,  0, 0, 500, 400); 
} 

//kolaha
var kolahaImageButton = document.getElementById('kolaha');
	kolahaImageButton.addEventListener('click', addkolahaImage);

var kolahaimage   = new Image();
kolahaimage.src = "../images/kolaha.gif"

function addkolahaImage(){
	context.drawImage(kolahaimage,  0, 0, 500, 400); 
} 

//bunny
var bunnyImageButton = document.getElementById('bunny');
	bunnyImageButton.addEventListener('click', addbunnyImage);

var bunnyimage   = new Image();
bunnyimage.src = "../images/bunny.gif"

function addbunnyImage(){
	context.drawImage(bunnyimage,  0, 0, 500, 400); 
} 

//duck
var duckImageButton = document.getElementById('duck');
	duckImageButton.addEventListener('click', addduckImage);

var duckimage   = new Image();
duckimage.src = "../images/duck.gif"

function addduckImage(){
	context.drawImage(duckimage, 0, 0, 500, 400); 
} 

var randomImageButton = document.getElementById('random');
	randomImageButton.addEventListener('click', setuprandomImage);

var randomimage   = new Image();


function setuprandomImage(){
	var randNum = Math.floor(Math.random() * 7)+1;

var n = [];
    n[1] = "../images/cat.gif";
    n[2] = "../images/dog.gif";
    n[3] = "../images/turtle.gif";
    n[4] = "../images/elephants.gif";
    n[5] = "../images/kolaha.gif";
    n[6] = "../images/bunny.gif";
    n[7] = "../images/duck.gif";
    var randomimagechoice = n[randNum];
    randomimage.src = randomimagechoice;
    
	addrandomImage(randomimage);
}

function addrandomImage(randomimage){
	context.drawImage(randomimage, 0, 0, 500, 400); 
} 