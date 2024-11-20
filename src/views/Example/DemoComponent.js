import React from 'react';
import ChildComponent from './ChildComponent';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

class DemoComponent extends React.Component {
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
                {/* event - handle on change
                <input value={this.myvar.name} type='text'
                    onChange={(event) => this.handleOnchangeName(event)}
                />
                <div className='firstDiv'> {this.state.name}. Hello React</div>
                <div className='secondDiv'>My website {this.state.website}</div>
                <div className='firstDiv'>My name is {this.myvar.name}. Hello React</div>
                <div className='secondDiv'>My website {this.myvar.website}</div>
                <div className='third'>
                    event - handle onclick
                    <button onClick={this.handleOnClick}>Click Me</button>
                </div> 
                */}

                <div>
                    <ChildComponent name={"first_child"} />
                    <ChildComponent name={"second_child"} />
                    <ChildComponent name={"third_child"} />
                    <h2>My Form</h2>
                    <form>
                        <label htmlFor="fname">First name:</label><br />
                        <input
                            type="text"
                            value={this.state.firstName}
                            // onChange={(event) => this.handleChangeFirstName(event)}
                            onChange={this.handleChangeFirstName}
                        />
                        <br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChangeLastName}
                        />
                        <br />
                        <br />
                        <input
                            type="button"
                            value="Submit"
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>

            </>

        )
    }
}

export default DemoComponent;