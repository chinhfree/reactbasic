import React from 'react';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

class DemoComponent extends React.Component {
    state = {
        name: 'ChinhFree',
        website: 'chinh.free'
    }
    myvar = {
        name: 'testname',
        website: 'test website'
    }
    //example event
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        //keyword use to get value in state: this
        return (
            <>
            <input value={this.state.name} type='text' 
                onChange={(event) => this.handleOnchangeName(event)}
            />
                <div className='firstDiv'> {this.state.name}. Hello React</div>
                <div className='secondDiv'>My website {this.state.website}</div>
                <div className='firstDiv'>My name is {this.myvar.name}. Hello React</div>
                <div className='secondDiv'>My website {this.myvar.website}</div>
                
            </>
            
                
            
        )
    }
}

export default DemoComponent;