import React from "react";

class RootComponent extends React.Component {
    state = {
        todos: [
            { id: 'todo1', title: 'do exercise' },
            { id: 'todo2', title: 'learning' },
            { id: 'todo3', title: 'eating' }
        ]
    }

    render() {
        return (
            <>
                <div>My Jobs</div>
                <div className="container">
                    <div className="add">
                        <input type="text" />
                        <button type="button">Add</button>
                    </div>
                    <div className="view">

                    </div>
                </div>
            </>
        )
    }
}


export default RootComponent;