import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //validate data
        if (!this.state.title || !this.state.salary) {
            alert('Missing')
            return
        }
        console.log(this.state);
        //call add new job via props from parent 
        this.props.addNewJob({
            id: parseInt(Math.random(), 100),
            title: this.state.title,
            salary: this.state.salary
        }
        );

        //clear field
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    // onChange={(event) => this.handleChangetitle(event)}
                    onChange={this.handleChangeTitle}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.handleChangeSalary}
                />
                <br />
                <br />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.handleSubmit}
                />
            </form>
        )

    }
}

export default AddComponent;