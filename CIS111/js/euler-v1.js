function eulerPrblmOne(){
var sum, num, n;

num = parseInt($("numberBox").value);
console.log(num)
sum = 0;

for(n = 1; n < num; n++) {
	console.log(n)
   if (n % 3 == 0) {
   console.log("if triggered") 
   	sum = sum + n;
   }
   else if (n % 5 == 0) {
   console.log("else if triggered") 
   	sum = sum + n;
   }
   
}
return $("sumSpan").innerHTML = sum;
}

function $(id){
return document.getElementById(id);
}

//reset
function reset(){
var newSum, newLen;
newSum = $('sumSpan').innerHTML = "???";
newLen = $('numberBox').value ='';
}
 
//grab the button
var button1 = $("go1");
button1.onclick = eulerPrblmOne;

var button2 = $("reset");
button2.onclick = reset;

