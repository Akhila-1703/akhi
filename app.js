const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}