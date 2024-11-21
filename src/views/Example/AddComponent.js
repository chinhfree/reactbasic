import React from 'react';

class AddComponent extends React.Component {
    state = {
        jobTitle: '',
        salary: ''
    }

    handleChangejobTitle = (event) => {
        this.setState({
            jobTitle: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title:</label><br />
                <input
                    type="text"
                    value={this.state.jobTitle}
                    // onChange={(event) => this.handleChangejobTitle(event)}
                    onChange={this.handleChangejobTitle}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.handleChangesalary}
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