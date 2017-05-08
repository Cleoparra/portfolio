var repeatWord = function(s){
	var result = '';
	console.log(result);

for(var j = 0; j < s.length; j++)
		result = result + s; 
	console.log(result);
	
return result;

}

 
//grab the button
var button1 = $("bttn1");
console.log(button1);

 
//register the handler as a "Do it All" function
button1.onclick = function(){
	$("outputH3").innerHTML = repeatWord($("textBox").value);
}
