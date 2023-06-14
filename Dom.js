var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);


function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var deleteBtn = document.createElement('button');
  var editbtn = document.createElement('Edit');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode(' X'));
  editbtn.appendChild(document.createTextNode(' Edit'))
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);
  itemList.appendChild(li);
  itemList.appendChild(li);
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


