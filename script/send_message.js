function addMessage() {
    var table = document.getElementById('blog');

    // Insert a row in the table at row index 0
    var newRow = table.insertRow(-1);

    // Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);

    let nameField = document.getElementById('nick');
    let name;
    if (nameField.value){
        name = nameField.value;
    }
    else{
        name = "Аноним";
    }
    let username = document.createElement('h3');
    let topic = document.getElementById('topic').value;
    username.appendChild(document.createTextNode("User: " + name + ". " + topic));
    let message = document.createElement('p');
    message.appendChild(document.createTextNode(document.getElementById('text_message').value));
    //var newText = document.createTextNode('New top row');
    newCell.appendChild(username);
    newCell.appendChild(message);
  }
  