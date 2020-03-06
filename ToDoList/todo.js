var myToDoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myToDoList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
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

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

function displayAll() {
  let todo = document.getElementById('myList');
}

function displayRemaining() {
  let todo = document.getElementById('myList');
  let list = todo.getElementsByTagName('LI');
  for(let i = 0; i < list.length; i++) {
    if(list[i].children[0].className != 'remaining') {
      list[i].style.display='none';
    }
  }
}

function displayCompleted() {
  let todo = document.getElementById('todos');
  let list = todo.getElementsByTagName('li');
  for(let i = 0; i < list.length; i++) {
    if(list[i].children[0].className != 'remaining completed') {
      list[i].style.display='none';
    }
  }
}