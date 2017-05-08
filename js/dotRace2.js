//TakeAStep
function takeAStep(){
	console.log('here')
	var red, blue, raceLen;
	raceLen = parseInt($("lengthBox").value);
	console.log('raceLen', raceLen);
	
//red
	red = parseInt($("redSpan").innerHTML);
	
	red = red + RandomInt(1, 3);
	console.log('red', red);
	
	$("redSpan").innerHTML = red;

//blue
	blue = parseInt($("blueSpan").innerHTML);
	
	blue = blue + RandomInt(1, 3);
	console.log('blue', blue);
	
	$("blueSpan").innerHTML = blue;
	
//winner
	if((red >= raceLen) && (blue >= raceLen))
	    alert('We have a tie!');
	else if(red >= raceLen)
	    alert('Red wins!');
	else if(blue >= raceLen)
	    alert('Blue wins!');
}
 
//newRace
function newRace(){
var newRed, newBlue, newLen;
newRed = $('redSpan').innerHTML = 0;
newBlue = $('blueSpan').innerHTML = 0;
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