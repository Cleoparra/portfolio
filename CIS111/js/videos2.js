        
        function Video(movieTitle) {
            this.Title   = movieTitle;
      
            this.getText = function() { 
                var text = '<source src='  + this.Title + '.mp4 type=\"video/mp4\">\
                <source src='  + this.Title + '.ogg type=\"video/ogg\">\
                <source src='  + this.Title + '.webm type=\"video/webm\">\
                <source src='  + this.Title + '.ogv type=\"video/ogv\">\
                <source src='  + this.Title + '.3pg type=\"video/3pg\">\
                Your browser does not support the video tag.\
                </video>\
                <br><br><br><br>';
                return text;
            }
        }

//controls forvideo1   
    function vidPlay1() {
    var video = document.getElementById("myVideo1");
    if (video.paused) {
    video.play();
    } 
    else {
    myVideo.pause();
    }}

    function vidPause1() {
    var video = document.getElementById("myVideo1");
    if (video.paused) {
    video.play();
    } 
    else {
    video.pause();
    }}

    function vidRestart1() {
    var video = document.getElementById("myVideo1");
    video.pause();
    video.currentTime = 0;
    video.load();
    }

//controls for video2  
    function vidPlay() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
    video.play();
    } 
    else {
    video.pause();
    }}

    function vidPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
    video.play();
    } 
    else {
    myVideo.pause();
    }}

    function vidRestart() {
    var video = document.getElementById("myVideo");
    video.pause();
    video.currentTime = 0;
    video.load();
    }

//array
        var videoList = new Array();

        
        function init() {
    
            var addButton = document.getElementById("addButton");
            addButton.onclick = handleAddButtonClick; 

            var suggestButton = document.getElementById("suggestButton");
            suggestButton.onclick = handleSuggestButtonClick; 
        }
 
        window.onload = init;

        function handleAddButtonClick() { 
            var titleTextInput = document.getElementById("titleTextInput");
            var title = titleTextInput.value; 
 

            if (title == "") { 
                alert("Please enter an image title!");
            }

            else { 
                var video = new Video(title);
                videoList.push(video); 
                
                displayVideoList(); 

                titleTextInput.value = ""; 

            }}


        function handleSuggestButtonClick() { 
            var video = suggestVideo(); 

            var suggestedVideo = document.getElementById("suggestVideoDiv"); 
            suggestVideoDiv.innerHTML = '<video id=\"myVideo1\" width=\"300\" poster="imagememe.jpg">'
            + (video.getText()) + 
            "<br>\
            <button type=\"button\" onclick=\"vidPlay1()\">Play</button>\
            <button type=\"button\" onclick=\"vidPause1()\">Pause</button>\
            <button type=\"button\" onclick=\"vidRestart1()\">Rewind</button>";
        }
        
        function displayVideoList() { 

            var videoListText = ""; 
            for (var i = 0; i < videoList.length; i += 1) { 
                var video = videoList[i]; 
                videoListText = video.getText(); 
            }
            
            var videoListDiv  = document.getElementById("videoListDiv");
            videoListDiv.innerHTML = '<video id=\"myVideo\" width=\"300\" poster="imagememe.jpg">'
            + videoListText + 
            "<br>\
            <button type=\"button\" onclick=\"vidPlay()\">Play</button>\
            <button type=\"button\" onclick=\"vidPause()\">Pause</button>\
            <button type=\"button\" onclick=\"vidRestart()\">Rewind</button>"; 
        }

        function suggestVideo() { 
            var index = Math.floor(Math.random()*videoList.length); 
            var suggestedVideo = videoList[index]; 
            return suggestedVideo; 
        }
        