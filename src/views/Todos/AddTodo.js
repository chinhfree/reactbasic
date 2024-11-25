import React from 'react';
import './ListTodos.scss';
import { toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeValue = (event) => {
        this.setState({
            title: event.target.value
        })

    }

    handleOnClickAdd = () => {
        if (!this.state.title) {
            alert('empty')
            return
        }
        let todoItem = {
            id: Math.floor(Math.random() * 100) + 1,
            title: this.state.title
        }
        this.setState({
            title: ''
        })
        this.props.addNewTodo(todoItem);
        toast.success('Success!')
    }

    render() {
        let title = this.state.title;
        return (
            <div className="add">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeValue(event)} />
                <button type="button" onClick={this.handleOnClickAdd} >Add</button>
            </div>
        )
    }
}

export default AddTodo;