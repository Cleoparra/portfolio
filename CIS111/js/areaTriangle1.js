//area non right
function getArea() { 
  var a = parseInt(5);
  var b = parseInt(6);
  var c = parseInt(7);
  var s = (a + b + c)/2;
  var e = (s - a) * (s - b) * (s - c)
  var area = Math.sqrt(s * e);
  var sum = area.toFixed(2);
  console.log(sum);
  alert("The area is: "+sum+"");
}
