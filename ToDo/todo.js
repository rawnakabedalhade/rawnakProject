/* Adding todos */
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
let todos=localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos')): [];;

// Load todos from local storage
// const loadTodos = () => {
//     const todos =localStorage.getItem('todos') ?
//     JSON.parse(localStorage.getItem('todos')): [];
//     todos.forEach(todo => generateTemplate(todo));
// };

const saveTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // todos.forEach(todo => generateTemplate(todo));
};

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
    <span>${todo}</span>
    <i class="bi bi-trash delete"></i>
    </li>`;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        // Save to local storage
        todos.push(todo);
         saveTodos(todos);
         generateTemplate(todo);
        addForm.reset();
    }

});
// delete todos
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        let indexToDelete= todos.findIndex(()=>{
            return e.target.parentElement.textContent==this;
        });
        todos.splice(indexToDelete,1);
    }
     // Remove from local storage
       saveTodos(todos);

});



//how to save data when refresh