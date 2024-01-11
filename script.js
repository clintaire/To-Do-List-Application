document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.getElementById('taskList').addEventListener('click', removeTask);

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    listItem.insertBefore(checkBox, listItem.firstChild);
   
