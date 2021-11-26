class TodoList extends HTMLElement
{
    todos = [
        { description: 'Első todo' }
    ];

    connectedCallback() {
        var self = this;

        if (document.readyState === "complete") {
            self.render();
        } else {
            window.onload = function() {
                self.render();
            };
        }
    }

    render() {
        var todosDivList = this.todos.map(todo => `<div>${todo.description}</div>`);
        var addTodoDescriptionInput = '<input type="text" id="todo_add_todo_description">';
        var addTodoButton = '<input type="button" value="Add todo" id="todo_add_todo_button">';

        this.innerHTML = `<div>${addTodoDescriptionInput}${addTodoButton}<div></div>${todosDivList}</div>`;

        this.bindAddTodoButtonClick();
    }

    bindAddTodoButtonClick() {
        document.getElementById('todo_add_todo_button').addEventListener('click', this.addTodoButtonClicked.bind(this));
    }

    addTodoButtonClicked() {
        var description = document.getElementById('todo_add_todo_description').value;

        var todoAddedEvent = new CustomEvent('todo:added', {
            detail: {
                description: description
            }
        });

        window.dispatchEvent(todoAddedEvent);
    }
}

export default TodoList;
