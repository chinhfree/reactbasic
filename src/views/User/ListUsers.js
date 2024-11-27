import React from 'react';
import axios from 'axios';

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }

    // componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=2")
    //         .then(response => { console.log(response.data.data) })
    // }
    async componentDidMount() {
        let result = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({
            listUsers: result && result.data && result.data.data ? result.data.data : []
        })
    }

    render() {
        return (
            <div>List User</div>
        )
    }
}


export default ListUsers;