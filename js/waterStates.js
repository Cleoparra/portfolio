//sayNumber
var waterStates = function() { 
var n = document.getElementById("numberBox").value 
if((n >= 0) && (n < 32))
   return "Solid";
  else if((n >= 33) && (n < 211))
    return "Liquid";
  else if((n >= 212) && (n < 21,139))
    return "Gas";
  else if((n >= 21,140))
    return "Plasma";
}  
var button1 = document.getElementById("button1");

button1.onclick = function() {
  document.getElementById("headerh3").innerHTML = waterStates();
}