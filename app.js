const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        createTaskElement(text);
        taskInput.value = '';
    }
}

function createTaskElement(text) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });
    
    taskList.appendChild(li);
}