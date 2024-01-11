// Initialize tasks
let taskList = [];

// Add task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskList.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Toggle task completion
function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

// Delete task
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

// Render tasks
function renderTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskListContainer.appendChild(li);
    });
}

// Add event listeners
document.getElementById('addTaskButton').addEventListener('click', addTask);
