// script.js

// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new list item for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        listItem.remove();
    };

    // Add event listener for marking tasks as completed
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Append delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for the add task button
addTaskButton.addEventListener('click', addTask);

// Allow adding tasks by pressing the Enter key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
