    localStorage.clear();

    var coll = document.getElementsByClassName("collapsible");
    var i = 0;


    function saveNoteToFile() {

        var userInput = document.getElementById("noteData").value;
        var fileNameInput = document.getElementById("fileName").value;

        //FileName = prompt("What would you like to name the file");
        localStorage.setItem(fileNameInput, userInput.toString());

        addNote(userInput, fileNameInput);
    }

    function addNote(data, FileName) {
        //Collapsible 


        var butt = document.createElement("Button");
        butt.type = "Button";

        //EDIT BUTTON
        var newButton = document.createElement("Button");
        newButton.type = "Button";
        newButton.className = "button";
        newButton.textContent = "Edit";
        newButton.id = FileName + "button" + i;

        newButton.tag = FileName;

        //DELETE BUTTON
        var delButton = document.createElement("Button");
        delButton.type = "Button";
        delButton.className = "button";
        delButton.textContent = "Delete";
        delButton.id = FileName + "delbutton" + i;

        // LINE BREAK
        var newBr = document.createElement("br");
        newBr.id = "break" + i;

        //TEXT
        var newDiv = document.createElement("div");
        newDiv.className = "content";
        newDiv.id = FileName + "div";
        

        var newContent = document.createTextNode(data);
        newDiv.appendChild(newContent);

        butt.className = "collapsible";
        butt.textContent = FileName;
        butt.id = FileName;

        document.getElementById("myList").appendChild(butt);
        document.getElementById(FileName).insertAdjacentElement('afterend', newDiv);
        document.getElementById(FileName + "div").insertAdjacentElement('beforeend', newButton);
        document.getElementById(FileName + "button" + i).insertAdjacentElement('beforebegin', newBr);
        document.getElementById("break" + i).insertAdjacentElement('afterend', delButton);


        // Open collapsible
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display == "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });

        

        document.getElementById("fileName").value = "";
        document.getElementById("noteData").value = "";

        //EDIT
        newButton.onclick = function () {

            ButtonFileName = this.tag;
            console.log(this.tag);
            ButtonUserInput = localStorage.getItem(ButtonFileName);

            document.getElementById("fileName").value = ButtonFileName;
            ButtonUserInput = ButtonUserInput.replace(/^"|"$/g, '');

            document.getElementById("noteData").value = ButtonUserInput.toString();

            // test storage in edit button
            //localStorage.setItem(fileNameInput, JSON.stringify(userInput));
        }

        delButton.onclick = function () {

            // Removes an element from the document
            document.getElementById(this.parentNode.previousSibling.id).remove();
            document.getElementById(this.parentNode.id).remove();
            i--;
            //console.log(this.parentNode.id);
           // console.log(this.parentNode.previousSibling.id);
           
        }
     
        i++;
}
