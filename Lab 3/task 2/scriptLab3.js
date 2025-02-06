function addItem() {
    var input = document.getElementById("todoInput");
    var inputValue = input.value.trim();
    if (inputValue === "") return;
  
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    li.textContent = inputValue;
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      li.style.textDecoration = this.checked ? "line-through" : "none";
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };
  
    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  
    input.value = "";
  }