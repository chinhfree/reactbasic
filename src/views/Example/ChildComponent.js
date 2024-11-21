import React from 'react';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

// class ChildComponent extends React.Component {
//     render() {
//         let { name, age, address, jobs } = this.props;
//         return (
//             <>
//                 <div>
//                     child component {name} - {age} - {address}
//                 </div>
//                 <div className='jobs-list'>
//                     {
//                         jobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//             </>

//         )
//     }
// }

//function component
const ChildComponent = (props) => {
    let { name, age, address, jobs } = props;
    return (
        <>
            <div>
                child component {name} - {age} - {address}
            </div>
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

        </>
    )
}

export default ChildComponent;