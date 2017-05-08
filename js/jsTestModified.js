function randIntegerParttwo(){

var firstNum = Math.floor(Math.random() * (125)) + 1;
console.log(firstNum);

var num = Math.floor(Math.random() * (125 - firstNum)) + firstNum;
console.log(num);


for(Number = firstNum; Number < num; Number++) {

if (Number === 30)
    document.write("Thirty"  + ', ');

else if (Number === 81) 
     document.write("Eighty-One"  + ', ');

else if (Number === 110) 
     document.write("One-Hundred-Ten"  + ', ');

else 
document.write(Number + ', ');
}
}
window.onload = randIntegerParttwo();
