var clickCounter = function(){

var numOfClicks =
parseInt(document.getElementById("outSpan").innerHTML);
console.log("numOfClicks = " + numOfClicks);
 
//add one to numOfClicks
numOfClicks = numOfClicks + 1;
 
//put new number of clicks in the web page
document.getElementById("outSpan").innerHTML =
numOfClicks;
}
 
 
//2. grab the button
var button1 = document.getElementById("bttn1");
//console.log("button1 = " + button1);
 
//3. register the onclick handler
button1.onclick = clickCounter;