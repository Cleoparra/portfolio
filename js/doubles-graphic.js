function SelectImage(){
//image 1
	roll=Math.floor(Math.random()*6) + 1;
    imgName='../images/die' + roll + '.gif';
    document.getElementById('dieImg1').src = imgName;
//image 2
	roll=Math.floor(Math.random()*6) + 1;
    imgName='../images/die' + roll + '.gif';
    document.getElementById('dieImg2').src = imgName;
	
	if((roll == roll) && (imgName == ImgName))
	    alert('Doubles!');
	else ((roll !== roll) && (imgName !== ImgName))
		alert('Try again!')

} 

//grab the button
var button1 = document.getElementById("bttn1");
console.log(button1);

//register the handler as a "Do it All" function
button1.onclick = SelectImage