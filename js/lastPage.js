window.onload = function() {
    var canvas  = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var image   = new Image();
    image.onload = function() {      
    context.drawImage(image, 0, 0, canvas.width, canvas.height);                
}
    image.src = "../images/certificate.jpg"
}

var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage(){
    var canvas  = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var data = canvas.toDataURL();

    window.open(data, '_blank', 'location = 0, menubar = 0')
}

var canvaspageButton = document.getElementById('canvaspage');

canvaspageButton.addEventListener('click', canvaspageInfo);

function canvaspageInfo(){
    window.location.href='../html/canvasdemo.html'
}

var locationpageButton = document.getElementById('locationpage');

locationpageButton.addEventListener('click', locationpageInfo);

function locationpageInfo(){
    window.location.href='../html/locationfinal.html'
}

var loginPageButton = document.getElementById('loginPage');

loginPageButton.addEventListener('click', loginPageInfo);

function loginPageInfo(){
    window.location.href='../html/logInPage.html'
}