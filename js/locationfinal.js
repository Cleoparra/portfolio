var canvas  = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


var startButton = document.getElementById('start');
	startButton.addEventListener('click', startStory);

var ahhaimage   = new Image();
ahhaimage.src = '../images/ahha.jpg' 

function startStory(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	var name = prompt('Please enter your name: ')
	var story = 'Hey ' + name + '! Do you want to play a game?'
	context.drawImage(ahhaimage,  100, 100, 300, 200); 
	context.font = '30pt Calibri';
    context.fillStyle = 'black';
    context.fillText(story, 20, 50, 300, 600);
} 

var nextButton = document.getElementById('next');
	nextButton.addEventListener('click', nextStory);

var ohyeahimage   = new Image();
ohyeahimage.src = '../images/ohyeah.jpg' 

var disimage   = new Image();
disimage.src = '../images/disapointed.jpg'

function nextStory(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	nextStep()
}

function nextStep(){
	var go = prompt('I bet you $5, I could guess where you are right now. (yes or no): ');
		if (go == 'yes'){
			context.font = '25pt Calibri';
    		context.fillStyle = 'black';
    		context.fillText("Yay! Let’s get started.", 20, 50, 300, 600);
    		context.drawImage(ohyeahimage,  100, 100, 300, 200); 
    	}
    	else if (go != 'yes'){
    		context.font = '25pt Calibri';
    		context.fillStyle = 'black';
    		context.fillText("Next Time Then!", 20, 50, 300, 600);
    		context.drawImage(disimage,  100, 100, 300, 200);
    	}

}

var mapButton = document.getElementById('maplocation');
	mapButton.addEventListener('click', mapStep);

function mapStep(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	getLocation()
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(disLocation);
    }
    else {
        alert("Oops, no geolocation support");
    }
}

function disLocation(position) {
    var country = position.coords.country;
    var longitude = position.coords.longitude;
    shMap(position.coords);
}


var map;
function shMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    var mapOptions = {zoom: 20, center:googleLatAndLong, mapTypeId:google.maps.MapTypeId.SATELLITE};
    var mapDiv = document.getElementById("map");
    
    map = new google.maps.Map(mapDiv, mapOptions);
    
    addMarker(googleLatAndLong);
}

var marker;
function addMarker(latlong) {
    var markerOptions = {position:latlong, map:map};
    marker = new google.maps.Marker(markerOptions);
}

var rightButton = document.getElementById('right');

rightButton.addEventListener('click', rightInfo);

function rightInfo(){
    
    document.getElementById("payup").innerHTML = 'Pay Up!!' + '\n' +  'Please click next to Continue.';
} 

var nextButton = document.getElementById('nextPage');

nextButton.addEventListener('click', nextInfo);

function nextInfo(){
    window.location.href='../html/lastPage.html'
}


