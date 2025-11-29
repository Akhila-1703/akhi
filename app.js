const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);
addBtn.addEventListener('click', addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task.text, task.completed));
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        createTaskElement(text, false);
        saveTasks();
        taskInput.value = '';
    }
}

function createTaskElement(text, isCompleted) {
    const li = document.createElement('li');
    if (isCompleted) li.classList.add('completed');
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });
    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });
    
    taskList.appendChild(li);
}
// changed colors

// refactored the file

// fixed layout issue

// fixed button hover

// removed dead code

// small fix

// updated logic

// fixed mobile view

// fixed the undefined error

// fixed typo

// added flexbox

// fixed console error

// ui update

// adjusted font size

// adjusted width

// updated logic

// removed dead code

// fixed console error

// fixed the undefined error

// cleanup

// added more padding

// changed font
