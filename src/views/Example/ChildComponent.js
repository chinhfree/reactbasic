import React from 'react';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

class ChildComponent extends React.Component {
    // state = {
    //     name: 'ChinhFree',
    //     website: 'chinh.free'
    // }
    // myvar = {
    //     name: 'testname',
    //     website: 'test website'
    // }
    // //example event
    // handleOnchangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    //     // console.log("event: ", event)
    //     // console.log("event.target: ", event.target)
    //     // console.log("event.target.value: ", event.target.value)
    // }
    // handleOnClick = () => {
    //     alert('Clicked!');
    //     console.log('hit the button')
    // }
    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        //keyword use to get value in state: this
        return (
            <>
                <div>
                    child component {this.props.name}
                </div>

            </>

        )
    }
}

export default ChildComponent;