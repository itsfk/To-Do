function add(){
    var ul=document.getElementById("todo");
    var inputValue=document.getElementById("input").value;
    var listItem=document.createElement("li");
    var userInputTextNode = document.createTextNode(inputValue);
    var span =document.createElement("span");
    span.appendChild(userInputTextNode);   
   listItem.innerHTML=
     "<input type='submit' value='Update' class='btn btn-success todoBtn' onclick='updateTask(this)' class='my'/>" +
     "<input type='submit' value='Delete' class='btn btn-danger todoBtn' onclick='deleteTask(this)'/>";
     listItem.appendChild(span);  
     ul.appendChild(listItem);
}
function deleteTask(element) {
    element.parentElement.remove();
  }
function updateTask(element){
    var newText = prompt(
        "update task",
        element.parentElement.children.item(2).innerHTML=newText
    );
    element.parentElement.children.item(2).innerHTML = newText;
console.log(newText)
}