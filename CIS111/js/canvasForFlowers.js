function forDucks() {
        var canvas  = document.getElementById("myCanvasFour");
        var context = canvas.getContext("2d");
        for (var i = 1; i < 15; i++) {
            var x = Math.random()*200+ 10;
            var y = Math.random()*200+ 10;
            var randNum = Math.floor(Math.random() * 11)+1;
            var n = [];
            n[1] = "#FF0000";
            n[2] = "#CC3300";
            n[3] = "#E86C19";
            n[4] = "#FF9933";
            n[5] = "#FFFF00";
            n[6] = "#CCFF33";
            n[7] = "#00FF00";
            n[8] = "#00FF99";
            n[9] = "#3399FF";
            n[10] = "#6600FF";
            n[11] = "#660066";
            n[12] = "#FF0066";
            var color = n[randNum];
            var stroke = n[randNum + 1];
            drawDucks(x, y, context, color, stroke);
    }}

function drawDucks(x, y, context, color, stroke) {
    context.beginPath();
    context.rect(x, y, 15, 15);
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = stroke;
    context.stroke();
    context.closePath(); 
}