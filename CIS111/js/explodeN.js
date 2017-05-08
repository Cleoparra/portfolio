//star	
var frameIt = function(n){

//array it
var results = '/n';
var words = n.split(" ");
var longest = 0;
var nb;
var spaces;
for ( var i = 0; i<words.length; i++){
	if (words[i].length>longest){
		longest = words[i].length;
	}
} 

results = results + stars(longest+4) + '\n';

for (var i = 0; i<words.length; i++){
	nb = longest -words[i].length;
	spaces = blanks(nb);
	results += "* " + words[i] + spaces + " *" + "\n";
}
results = results + stars(longest+4) + '\n';

return results;

}
//star	
	var stars = function(n){
	var result = '';
	for(var i = 1; i <= n; i++){
		result = result + "*";
	}
}

//space	
	var blanks = function(n){
	var result = '';
	for(var i = 0; i <= n;  ){
		result = result + '';
	}
		return result;
}

	
//grab the button
var button1 = $("bttn1");
console.log(button1);

 
//register the handler as a "Do it All" function
button1.onclick = function(){
	$("outputH3").innerHTML = frameIt($("textBox").value);
}