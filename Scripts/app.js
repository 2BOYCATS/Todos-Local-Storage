const formTodos = document.getElementById('formTodos')
const listTodos = document.getElementById('list')

const todos = JSON.parse(localStorage.getItem('todos')) || []

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = () => {
  listTodos.innerHTML = ''

  for(const [index, todo] of todos.entries()){
    const li = document.createElement('li')
    li.textContent = todo
    const del = document.createElement('button')
    del.type = 'button'
    del.textContent = '🗑️'
    del.addEventListener('click', () => {
      todos.splice(index, 1)
      saveTodos()
      renderTodos()
    })
    li.appendChild(del)
    listTodos.appendChild(li)
  }
}


const addTodo = (event) => {
  event.preventDefault()

  const inputTodo = document.getElementById('todoInput')
  const newTodo = inputTodo.value.trim()
  if (newTodo) {
    todos.push(newTodo)
    saveTodos()
    inputTodo.value = ''
    inputTodo.focus()
    renderTodos()
  }
}

formTodos.addEventListener('submit', addTodo)
renderTodos()