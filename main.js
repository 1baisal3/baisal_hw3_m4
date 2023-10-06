const todosList = document.getElementById("todos-list"); 
const maxTasksToShow = 40; 

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((todos) => {
            for (let i = 0; i < maxTasksToShow && i < todos.length; i++) {
                const todo = todos[i];
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${todo.id}, Заголовок: ${todo.title}, Статус: ${todo.completed ? 'Выполнено' : 'Не выполнено'}`;
                todosList.appendChild(listItem);
            }
        });
}

getData();