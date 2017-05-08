//star	
var starWedge = function(n){
var result = '';
	for(var i = n; i >= 1; --i){
	for(var j = i; j >= 1; --j){

		result = result + "*";
	}
	result += "\n";
	}	
	return result;
}
	
//grab the button
var button1 = $("bttn1");
console.log(button1);

 
//register the handler as a "Do it All" function
button1.onclick = function(){
	$("outputH3").innerHTML = starWedge($("textBox").value);
}