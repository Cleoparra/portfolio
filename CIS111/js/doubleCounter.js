	//define the onclick handler
	var double = function(){
		var num = document.getElementById('numberBox').value;
		num =  num * 2;
		document.getElementById("numberBox").value= num;
		var clickCount = document.getElementById("divCount").innerHTML;
		console.log(clickCount);
		var clickCount = parseInt(clickCount)+1;
		document.getElementById("divCount").innerHTML= clickCount;
	}