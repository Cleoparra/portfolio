//sayNumber
var sayNumber = function(n) { 
var n = document.getElementById("numberBox").value
  if(n == 0)
   return "Zero";
  else if(n == 1)
    return "One";
  else if(n == 2)
    return "Two";
  else if(n == 3)
    return "Three";
  else if(n == 4)
    return "Four";
  else if(n == 5)
    return "Five";
  else if(n == 6)
    return "Six";
  else if(n == 7)
    return "Seven";
  else if(n == 8)
    return "Eight";
  else if(n == 9)
    return "Nine";
  else if(n == 10)
    return "Ten";
  else if (n < 0)
    return n + " is too small.";
  else (n > 10)
    return n + " is too large.";
}
var button1 = document.getElementById("button1");

button1.onclick = function() {
  document.getElementById("headerh3").innerHTML = sayNumber();
}