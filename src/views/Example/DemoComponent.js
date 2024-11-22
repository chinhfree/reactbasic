import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';


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
        lastName: '',
        jobs: [
            {
                id: 'job1',
                title: 'IT',
                salary: '$500'
            },
            {
                id: 'job2',
                title: 'tester',
                salary: '$300'
            },
            {
                id: 'job3',
                title: 'Project Manager',
                salary: '$1000'
            }
        ]
    }

    addNewJob = (job) => {
        //js basic
        let currentJobs = this.state.jobs;
        currentJobs.push(job);
        this.setState({
            jobs: currentJobs
        })


        // advance - copy all elements of a n array ...
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }
    deleteJob = (job) => {

        // console.log(job)
        let currentJobs = this.state.jobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            jobs: currentJobs
        })
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

                    <h2>My Form</h2>

                </div>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    name={this.state.firstName}
                    age={"28"}
                    address={"Hanoi"}
                    jobs={this.state.jobs}
                    deleteJob={this.deleteJob}
                />
            </>

        )
    }
}

export default DemoComponent;