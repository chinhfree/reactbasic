import React from "react";
import './ListTodos.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';


class RootComponent extends React.Component {
    state = {
        todos: [
            { id: 'todo1', title: 'do exercise' },
            { id: 'todo2', title: 'learning' },
            { id: 'todo3', title: 'eating' }
        ],
        editTodo: {

        }
    }

    addNewTodo = (todoItem) => {
        this.setState({
            todos: [...this.state.todos, todoItem]
        })

        return
    }

    deleteATodo = (id) => {

        let currentTodos = this.state.todos;
        currentTodos = currentTodos.filter(item => item.id !== id);
        this.setState({
            todos: currentTodos
        })

        toast.success("Success!");
        return
    }

    editATodo = (todo) => {
        let { editTodo, todos } = this.state;
        let countTodo = Object.keys(todo).length === 0;
        //click save
        if (countTodo === false && editTodo.id === todo.id) {
            let todosCopy = todos;
            todosCopy.forEach(item => {
                if (item.id === todo.id) {
                    item.title = editTodo.title;
                }
            });
            this.setState({
                todos: todosCopy,
                editTodo: {}
            })
            toast.success("Success!");
            return;
        }
        //click edit
        this.setState({
            editTodo: todo
        })

    }

    changeTodoTitle = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { todos, editTodo } = this.state;
        let notEdit = Object.keys(editTodo).length === 0;
        return (
            <>
                <div>My Jobs</div>
                <div className="container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="view">
                        <div>
                            {todos && todos.length > 0 &&
                                todos.map((item, index) => {
                                    return (
                                        <div className="list-todo-child" key={item.id}>
                                            {notEdit === true ?
                                                <span>{index + 1} - {item.title} </span>
                                                : <>
                                                    {editTodo.id === item.id ?
                                                        <span>{index + 1} - <input value={editTodo.title} onChange={(event) => { this.changeTodoTitle(event) }} /></span>
                                                        :
                                                        <span>{index + 1} - {item.title} </span>
                                                    }
                                                </>

                                            }
                                            <button onClick={() => this.editATodo(item)}>
                                                {notEdit === false && item.id === editTodo.id ?
                                                    "Save"
                                                    :
                                                    "Edit"
                                                }

                                            </button>
                                            <button onClick={() => this.deleteATodo(item.id)}>Delete</button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default RootComponent;