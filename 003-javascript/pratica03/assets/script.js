var taskInput = document.getElementsByName('task')[0];
var add = document.getElementsByClassName('add')[0];
var ul = document.getElementsByClassName('tasks')[0];
var values = [];

add.addEventListener('click', () => {
    const taskName = taskInput.value;

    if (!taskName || values.indexOf(taskName) != -1) {
        taskInput.focus();
        return;
    }

    let li = document.createElement('li');
    
    let cb = document.createElement('input');
    cb.id = values.length + 1;
    cb.type = 'checkbox';
    
    let task = document.createElement('label');
    task.htmlFor = values.length + 1;
    task.innerHTML = taskName;

    li.appendChild(cb);
    li.appendChild(task);

    ul.appendChild(li);

    values.push(taskName);
})