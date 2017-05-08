//TakeAStep
function takeAStep(){
	//console.log('here')
	var red, blue, num, raceLen;

//raceLen
raceLen = parseInt($("lengthBox").value);
//console.log('raceLen', raceLen);
	
//red
	red = $("redSpan").innerHTML;
	num = RandomInt(1, 3);	
	 if (num == 1)
	 	red = red + "*";
	 else if (num == 2)
	 	red = red + "**";
	 else 
        red = red + "***";
	console.log('red', red);
	
	$("redSpan").innerHTML = red;

//blue
	blue = ($("blueSpan").innerHTML);
	num = RandomInt(1, 3);	
	 if (num == 1)
	 	blue = blue + "*";
	 else if (num == 2)
	 	blue = blue + "**";
	 else 
        blue = blue + "***";
	console.log('blue', blue);
	
	$("blueSpan").innerHTML = blue;

//winner
	if((red.length >= raceLen) && (blue.length >= raceLen))
	    alert('We have a tie!');
	else if(red.length >= raceLen)
	    alert('Red wins!');
	else if(blue.length >= raceLen)
	    alert('Blue wins!');
}

//newRace
function newRace(){
var newRed, newBlue, newLen;
newRed = $('redSpan').innerHTML = '';
newBlue = $('blueSpan').innerHTML = '';
newLen = $('lengthBox').value ='';
}
 
//grab the button
var button1 = $("bttn1");
console.log(button1);

var button2 = $("newRace");
console.log(button2);

 
//register the handler as a "Do it All" function
button1.onclick = takeAStep;

button2.onclick = newRace;