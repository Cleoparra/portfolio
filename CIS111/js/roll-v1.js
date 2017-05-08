
 
//1. define onclick handler
function RollUntilDoubles(){
var roll1, roll2, rollCounter;
//reset the outputDiv
document.getElementById('outputDiv').innerHTML = "";
//reset the rollCount Div
$("rollCount").innerHTML = 0;
 
do {
//roll the dice
roll1 = RandomInt(1, 6);
roll2 = RandomInt(1, 6);	
//display the roll
document.getElementById('outputDiv').innerHTML =
document.getElementById('outputDiv').innerHTML +
roll1 +'-' + roll2+'<br>';
//add one to the roll counter
rollCounter = document.getElementById('rollCount').innerHTML;
++rollCounter;
document.getElementById('rollCount').innerHTML = rollCounter;
 
} while (roll1 != roll2);
document.getElementById('outputDiv').innerHTML =
document.getElementById('outputDiv').innerHTML+'DOUBLES!';
}
 
//2. grab the button
var button1 = document.getElementById("btn1");
 
//3. register the onclick handler
button1.onclick = RollUntilDoubles;