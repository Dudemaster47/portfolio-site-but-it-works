import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();

    const clickHandler1 = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const clickHandler2 = (e) => {
        e.preventDefault();
        navigate('/aboutme');
    }

    const clickHandler3 = (e) => {
        e.preventDefault();
        navigate('/skills');
    }

    const clickHandler4 = (e) => {
        e.preventDefault();
        navigate('/projects');
    }

    const clickHandler5 = (e) => {
        e.preventDefault();
        navigate('/socials');
    }

    const clickHandler6 = (e) => {
        e.preventDefault();
        navigate('/feedback');
    }

    return (
        <nav className='outerbar'>
            <ul className="navbar">
                <li className="navbutton" onClick={clickHandler1}>
                    <NavLink to='/' exact={true} activeClassName='active'>
                    Home
                    </NavLink>
                </li>
                <li className="navbutton" onClick={clickHandler2}>
                    <NavLink to='/aboutme' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                <li className="navbutton" onClick={clickHandler3}>
                    <NavLink to='/skills' exact={true} activeClassName='active'>
                    Skills
                    </NavLink>
                </li>
                <li className="navbutton" onClick={clickHandler4}>
                    <NavLink to='/projects' exact={true} activeClassName='active'> 
                    Projects
                    </NavLink>
                </li>
                <li className="navbutton" onClick={clickHandler5}>
                    <NavLink to='/socials' exact={true} activeClassName='active'>
                    Socials
                    </NavLink>
                </li>
                <li className="navbutton" onClick={clickHandler6}>
                    <NavLink to='/feedback' exact={true} activeClassName='active'>
                    Contact Me!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;