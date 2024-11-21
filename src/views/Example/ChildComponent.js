import React from 'react';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { name, age, address, jobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        { console.log(">>>>check: ", check) }
        return (

            // <>
            //     {showJobs === false && <button onClick={this.handleShowHide}>Show</button>}


            //     {showJobs &&
            //         <>
            //             <div className='jobs-list'>
            //                 {
            //                     jobs.map((item, index) => {
            //                         return (
            //                             <div key={item.id}>
            //                                 {item.title} - {item.salary}
            //                             </div>
            //                         )
            //                     })
            //                 }
            //             </div>
            //             <button onClick={() => this.handleShowHide()}>Hide</button>
            //         </>
            //     }



            // </>

            //ternary operator
            <>
                {showJobs === false ?
                    <button onClick={this.handleShowHide}>Show</button>
                    :
                    <>
                        <div className='jobs-list'>
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </>


                }
            </>

        )
    }
}

//function component
// const ChildComponent = (props) => {
//     let { name, age, address, jobs } = props;
//     return (
//         <>
//             <div>
//                 child component {name} - {age} - {address}

//             </div>
//             <div className='jobs-list'>
//                 {
//                     jobs.map((item, index) => {
//                         //conditional
//                         if (index > 2) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>

//         </>
//     )
// }

export default ChildComponent;