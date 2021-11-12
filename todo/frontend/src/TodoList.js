class TodoList extends HTMLElement
{
    todos = [
        { description: 'Első todo' }
    ];

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.todos.map(todo => `<div>${todo.description}</div>`);
    }
}

export default TodoList;
