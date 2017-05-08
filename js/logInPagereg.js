

var enterButton = document.getElementById('enter');

enterButton.addEventListener('click', enterInfo);

function enterInfo(){
	var nameReg = document.getElementById('nameReg').value;
	var userNameReg = document.getElementById('userNameReg').value;
	var passwordReg = document.getElementById('passwordReg').value;

	if ((nameReg != '') && (userNameReg != '') && (passwordReg != '')){
    	document.getElementById("ruse").innerHTML = 'Congratulations! You have been accepted to Ruse University! Please click next to start your journey.'
	}
	else if (nameReg == ''){
		alert("Please make sure everything is filled out.")
	}
	else if (userNameReg == ''){
		alert("Please make sure everything is filled out.")
	}
	else if (passwordReg == ''){
		alert("Please make sure everything is filled out.")
	}

} 


var nextButton = document.getElementById('next');
	nextButton.addEventListener('click', nextInfo);

function nextInfo(){
    window.location.href='../html/canvasdemo.html'
}


//controls for video 

var playButton = document.getElementById('play');
	playButton.addEventListener('click', vidPlay);

function vidPlay() {
	var video = document.getElementById("myVideo");
    	if (video.paused) {
    		video.play();
    		video.volume = 0.15;
    } 
    	else {
    	video.pause();
}}

var pauseButton = document.getElementById('pause');
	pauseButton.addEventListener('click', vidPause);

function vidPause() {
	var video = document.getElementById("myVideo");
    	if (video.paused) {
    		video.play();
    } 
    	else {
    	myVideo.pause();
}}

var restartButton = document.getElementById('rewind');
	restartButton.addEventListener('click', vidRestart);

function vidRestart() {
	var video = document.getElementById("myVideo");
    	video.pause();
    	video.currentTime = 0;
    	video.load();
}

var fullScreenButton = document.getElementById('fullScreen');
	fullScreenButton.addEventListener('click', fullScreen);

function fullScreen() {
	var vid = document.getElementById("myVideo");
		if(vid.requestFullScreen){ 
			vid.requestFullScreen();
		}

		else if(vid.webkitRequestFullScreen){ 
			vid.webkitRequestFullScreen(); 
		} 
		
		else if(vid.mozRequestFullScreen){ 
			vid.mozRequestFullScreen(); 
		}
}

var decVButton = document.getElementById('decV');
	decVButton.addEventListener('click', decVvid);

function decVvid() {
	var video = document.getElementById("myVideo");
    	video.volume-=0.1;
}

var incVButton = document.getElementById('incV');
	incVButton.addEventListener('click', incVvid);

function incVvid() {
	var video = document.getElementById("myVideo");
    	video.volume+=0.1;
}

//Bar for video 
var video = document.getElementById('myVideo');
var pBar = document.getElementById('progressBar');

video.ontimeupdate = function() {myFunction()};

function myFunction() {
  	var percent = Math.floor((100 / video.duration) * video.currentTime);
  	pBar.value = percent;
  	pBar.getElementsByTagName('span')[0].innerHTML = percent;
} 

//video buffer
