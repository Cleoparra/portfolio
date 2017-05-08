
var MOTD = function() {
	
	var d = new Date();
	
	var time = d.getHours();
	
	if((time >= 0) && (time < 12))
		return("Good Morning!");
	else if((time >=12) && (time < 17))
		return "Good Afternoon!";
	else if((time >=17) && (time < 21))
		return "Good Evening!";
	else if((time >=21) && (time < 24))
		return "Good Night!";
}

var button1 = document.getElementById("bttn1");

button1.onclick = function(){
	document.getElementById("outputH3").innerHTML = MOTD();
}