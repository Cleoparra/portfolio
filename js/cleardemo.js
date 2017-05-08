var clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearImage);

function clearImage(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.location.href='../html/canvasdemo.html';
} 


