const todoForm = document.querySelector('.toDoForm');
const inputTodo = todoForm.querySelector('input');
const todoList = document.querySelector('.toDoList');

let toDos = [];
const TODOS_NAME = "toDos";

const handleSubmit_2 = (e) => {
    e.preventDefault();
    const currentValue = inputTodo.value;
    writeTodo(currentValue);
    inputTodo.value = "";
}

const writeTodo = (text) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerText = "✘";
    delBtn.addEventListener("click", deleteTodo);

    const span = document.createElement("span");
    const newid = toDos.length + 1;
    li.id = newid;
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    const todoObj = {
        text: text,
        id: newid
    };
    console.log(todoObj);
    toDos.push(todoObj);
    saveTodos();
}

const deleteTodo = (e) => {
    const btn = e.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const clearTodo = toDos.filter((el) => {
        return el.id !== parseInt(li.id);
    });
    toDos = clearTodo;
    saveTodos();
}

const saveTodos = () => {
    localStorage.setItem(TODOS_NAME, JSON.stringify(toDos));
}

const loadTodos = () => {
    const loadtodo = localStorage.getItem(TODOS_NAME);
    if(loadtodo !== null){
        const parseTodo = JSON.parse(loadtodo);
        parseTodo.forEach((el) => {
            writeTodo(el.text)
        })
    }
}

const init_2 = () => {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit_2);   
}

init_2();