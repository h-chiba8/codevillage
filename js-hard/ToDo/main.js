const list = document.getElementById('todo');
const inputTask = document.getElementById('add-area');
const addBtn = document.getElementsByClassName('add-btn')[0];

const removeTask = (removeBtn) => {
    const endTask = removeBtn.closest('li');
    list.removeChild(endTask);
};

const addTask = () => {
    const task = inputTask.value;
    const Item = document.createElement('li');
    Item.textContent = task;
    list.appendChild(Item);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '完了';
    Item.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => removeTask(removeBtn));
};

addBtn.addEventListener('click', (addTask));
