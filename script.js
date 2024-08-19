let ctr = 1;
function addTodo(){
  // Get the value from the input bitton
  const newTask = document.querySelector('input').value

  // Create element
  const newEl = document.createElement('div')
  newEl.setAttribute("class", "todos")
  newEl.setAttribute("id", "todo-box-" + ctr)

  // Creating new header and a button which will go under newEl and setting each of their attributes
  const newHeader = document.createElement('h3')
  newHeader.setAttribute("id", "task")
  if(newTask === ''){
    alert('Enter a task!');
    return;
  }
  newHeader.innerText = newTask;

  // Creating delBtn
  const delBtn = document.createElement('button')
  delBtn.setAttribute("id", "deleteBtn")
  delBtn.innerText = 'Delete'
  delBtn.setAttribute("onclick", "delTodo(" + ctr + ")");


  // Append all the buttons to newEl
  newEl.appendChild(newHeader)
  newEl.appendChild(delBtn)
  console.log(newEl)

  // Append to the body
  const parentEl = document.querySelector('.TopBar')
  parentEl.appendChild(newEl)
  
  // Reset the value of input
  document.querySelector('input').value = ''
  ctr++;
}

function delTodo(index){
  const selectedEl = document.getElementById(`todo-box-${index}`)
  selectedEl.parentNode.removeChild(selectedEl)
}  
