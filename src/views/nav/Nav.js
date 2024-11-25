import React from 'react';
import './Nav.scss';

import {
    Link, NavLink
} from "react-router-dom";


class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/demo" activeClassName="active">Demo</NavLink>
                <NavLink to="/todo" activeClassName="active">Todos</NavLink>
                {/* <a className="active" href="/">Home</a>
                <a href="/demo">Demo</a>
                <a href="/todo">Todos</a> */}
            </div>
        )
    }
}


export default Nav;