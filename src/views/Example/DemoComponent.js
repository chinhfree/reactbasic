import React from 'react';


/*
What is component? --> a block of code use to build

JSX --> javascript XML  --> render HTML

*/

class DemoComponent extends React.Component {
    render() {
        let name = 'ChinhFree';
        return (
            <h2>My name is {name} and here is my demo component</h2>
        );
    }
}

export default DemoComponent;