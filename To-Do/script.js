const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Add task text
    listItem.innerHTML = `
        <span>${task}</span>
        <span class="delete-btn">&times;</span>
    `;

    // Add delete functionality
    listItem.querySelector('.delete-btn').addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    // Append to the list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
}

// Add task when button is clicked
addBtn.addEventListener('click', addTodo);

// Add task when Enter key is pressed
todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});