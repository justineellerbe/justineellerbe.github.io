// Add a x button to each task added
var myToDoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myToDoList[i].appendChild(span);
  myToDoList[i].className = "remaining";
}

// Clicking the x button deletes the task
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    this.className = "deleted";
  }
}

// Toggle a check button when clicking a task
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.className = ('checked');
  }
}, false);

// Add a task when after clicking the + button
function add() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Assigns "remaining" as the class for every item added
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.className = "remaining";

  // Assigns "deleted" as the class for every item removed
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      this.className = "deleted";
    }
  }

}

// Shows all tasks in the ToDo list
function displayAll() {
  let todo = document.getElementById('myList');
  let list = todo.getElementsByTagName('LI');
  for (let i = 0; i < list.length; i++) {
    if (list[i].children[0].className != 'deleted') {
      list[i].removeAttribute("style");
    }
  }
}

// Shows all remaining (unchecked) tasks
function displayRemaining() {
  let todo = document.getElementById('myList');
  let list = todo.getElementsByTagName('LI');
  for (let i = 0; i < list.length; i++) {
    if (list[i].className != 'remaining' || list[i].children[0].className == 'deleted') {
      list[i].style.display = 'none';
    } else {
      list[i].removeAttribute("style");
    }
  }
}

// Shows all completed (checked) tasks
function displayCompleted() {
  let todo = document.getElementById('myList');
  let list = todo.getElementsByTagName('LI');
  for (let i = 0; i < list.length; i++) {
    if (list[i].className != 'checked' || list[i].children[0].className == 'deleted') {
      list[i].style.display = 'none';
    } else {
      list[i].removeAttribute("style");
    }
  }
}