import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <nav className='outerbar'>
            <ul className="navbar">
                <li className="navbutton">
                    <NavLink to='/' exact={true} activeClassName='active'>
                    Top
                    </NavLink>
                </li>
                <li className="navbutton">
                    <NavLink to='/aboutme' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                <li className="navbutton">
                    <NavLink to='/skills' exact={true} activeClassName='active'>
                    Skills
                    </NavLink>
                </li>
                <li className="navbutton">
                    <NavLink to='/projects' exact={true} activeClassName='active'> 
                    Projects
                    </NavLink>
                </li>
                <li className="navbutton">
                    <NavLink to='/socials' exact={true} activeClassName='active'>
                    Socials
                    </NavLink>
                </li>
                <li className="navbutton">
                    <NavLink to='/feedback' exact={true} activeClassName='active'>
                    Contact Me!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;