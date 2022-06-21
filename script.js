function add(){
    var innerContainer = document.createElement("div");
    innerContainer.className = "flexContainer";
    document.getElementById("outerContainer").appendChild(innerContainer);
    var paraText = document.getElementById("text").value;
    var textContainer = document.createElement("p");
    textContainer.innerHTML = paraText;
    textContainer.className = "task";
    innerContainer.appendChild(textContainer);
    // Strike a task 
    var strikeContainer = document.createElement("addbutton");
    strikeContainer.innerHTML = "&#x2713"// HTML code for right arrow
    strikeContainer.className = "strike";
    var strike = document.getElementsByClassName("strike");
    innerContainer.appendChild(strikeContainer);
    for(var j=0;j<strike.length;j++){
        strike[j].onclick = function(){
            var strikeParent = this.parentElement;
            var strikeScript = strikeParent.children[0];
            strikeScript.style.textDecoration = "line-through";
        }
    }
    // Deleting a task
    var addCloseButton = document.createElement("addbutton");
    addCloseButton.innerHTML = "&#x2717"; // HTML code for trashcan symbol
    addCloseButton.className = "delete";
    innerContainer.appendChild(addCloseButton);
    var close = document.getElementsByClassName("delete");
    for(var i=0;i<close.length;i++){
        close[i].onclick = function(){
            var delScript = this.parentElement;
            delScript.style.display = "none";
        }
    }
}