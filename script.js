document.getElementById('addTaskButton').addEventListener('click', addTask);
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
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function removeTask(event) {
    let clickedItem = event.target;
    let listItem = clickedItem.parentNode;
    let taskList = listItem.parentNode;

    if (clickedItem.nodeName === 'INPUT' && clickedItem.getAttribute('type') === 'checkbox') {
        listItem.classList.toggle('completed');
    } else if (clickedItem.nodeName === 'LI') {
        taskList.removeChild(listItem);
    }
}
