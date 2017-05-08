        function Picture(imageTitle, captionText) {
            this.Title   = imageTitle;
            this.Caption  = captionText;

            
            this.getText = function() { 
                var text = '<image src = ' + this.Title + ' width= "80px">';
                text += "<br> Caption: " + this.Caption + "<br>";

                return text;
            }
        }


        var pictureList = new Array();

        function init() {
            var addButton = document.getElementById("addButton");
            addButton.onclick = handleAddButtonClick;

            var clearButton = document.getElementById("clearButton");
            clearButton.onclick = handleClearButtonClick;

            var suggestButton = document.getElementById("suggestButton");
            suggestButton.onclick = handleSuggestButtonClick;
        }
        window.onload = init;

        function handleAddButtonClick() {
            var titleTextInput = document.getElementById("titleTextInput");
            var title = titleTextInput.value;

            var captionTextInput = document.getElementById("captionTextInput");
            var caption = captionTextInput.value;

            if (title == "") {
                alert("Please enter an image title!");
            }
            else if (caption == "") {
                alert("Please enter a caption!");
            }

            else {
                var picture = new Picture(title, caption);
                pictureList.push(picture);
                
                displayPictureList();

                titleTextInput.value = "";
                captionTextInput.value = "";

            }            
        }

        function handleClearButtonClick() {
            var NextPicture = suggestPicture();

            var suggestedPicture = document.getElementById("nextPictureDiv");
            nextPictureDiv.innerHTML = " <br> Next Image: <br> " + (NextPicture.getText());
        }

        function handleSuggestButtonClick() {
            var picture = suggestPicture();

            var suggestedPicture = document.getElementById("suggestPictureDiv");
            suggestPictureDiv.innerHTML = " <br> Random Image: <br> " + (picture.getText());
        }
        
        function displayPictureList() {

            var pictureListText = "";
            for (var i = 0; i < pictureList.length; i += 1) {
                var picture = pictureList[i];
                pictureListText = picture.getText();
            }
            
            var pictureListDiv  = document.getElementById("pictureListDiv");
            pictureListDiv.innerHTML = pictureListText;
        }

        function suggestPicture() {
            var index = Math.floor(Math.random()*pictureList.length);
            var suggestedPicture = pictureList[index];
            return suggestedPicture;
        }
        
   