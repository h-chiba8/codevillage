const list = document.getElementById('todo');
const inputTask = document.getElementById('add-area');
const addBtn = document.getElementById('add-btn');

const removeTask = (removeBtn) => {
    const endTask = removeBtn.closest('li');
    list.removeChild(endTask);
};

const addTask = (task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '完了';
    listItem.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => removeTask(removeBtn));
};




addBtn.addEventListener('click', () => {
    let task = inputTask.value;
    if (task.trim() === '') {
        alert('空欄です');
    } else {
        addTask(task);
    }
});