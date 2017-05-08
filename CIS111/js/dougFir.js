//space	
	var spaces = function(n){
	var result = '';
	for(var i = 0; i <= n; ++i){
		result = result + ' ';
	}
		return result;
}

//star	
	var stars = function(n){
	var result = '';
	for(var i = 1; i <= n; i++){
		result = result + "*";
	}
	return result;
}


//da tree
	var dougFir = function(n){
	var result = '\n';
	for (var i = Math.floor(n/2); i >= 0; --i){
		result= result + spaces(i) + stars(n-(i*2)) + '\n';
	}
result = result + spaces((n/2) - 1) +"**";
	return result;
}


//grab the button
var button1 = $("bttn1");
console.log(button1);

 
//register the handler as a "Do it All" function
button1.onclick = function(){
	$("outputH3").innerHTML = dougFir($("textBox").value);
}
