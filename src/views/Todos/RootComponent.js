import React from "react";
import './ListTodos.scss';
import AddTodo from './AddTodo';


class RootComponent extends React.Component {
    state = {
        todos: [
            { id: 'todo1', title: 'do exercise' },
            { id: 'todo2', title: 'learning' },
            { id: 'todo3', title: 'eating' }
        ]
    }

    addNewTodo = (todoItem) =>{
        this.setState({
            todos: [...this.state.todos, todoItem]
        })
        
        return
    }

    deleteATodo = (id) => {
        let currentTodos = this.state.todos;
        currentTodos.filter(item => item.id != id)
        this.setState({
            todos: currentTodos
        })
        return
    }
    render() {
        let {todos} = this.state;
        return (
            <>
                <div>My Jobs</div>
                <div className="container">
                    <AddTodo
                    addNewTodo = {this.addNewTodo}
                    />
                    <div className="view">
                        <div>
                            {todos && todos.length > 0 &&
                                todos.map((item, index)=>{
                                    return(
                                        <div className="list-todo-child" key={item.id}>
                                            <span>{index + 1} - {item.title} </span>
                                            <button>Edit</button>
                                            <button>Delete</button>
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