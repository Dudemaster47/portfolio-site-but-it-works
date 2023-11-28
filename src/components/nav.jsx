import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const navigate = useNavigate();

    const clickHandler1 = (e) => {
        e.preventDefault();
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
        navigate('/');
    }

    const clickHandler2 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(true);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
        navigate('/aboutme');
    }

    const clickHandler3 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(true);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
        navigate('/skills');
    }

    const clickHandler4 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(true);
        setIsActive5(false);
        setIsActive6(false);
        navigate('/projects');
    }

    const clickHandler5 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(true);
        setIsActive6(false);
        navigate('/socials');
    }

    const clickHandler6 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(true);
        navigate('/feedback');
    }

    return (
        <nav className='outerbar'>
            <ul className="navbar">
                <li className={isActive1 ? "activeNavbutton" : "navbutton"} onClick={clickHandler1}>
                    <NavLink to='/' exact={true} activeClassName='active'>
                    Home
                    </NavLink>
                </li>
                <li className={isActive2 ? "activeNavbutton" : "navbutton"} onClick={clickHandler2}>
                    <NavLink to='/aboutme' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                <li className={isActive3 ? "activeNavbutton" : "navbutton"} onClick={clickHandler3}>
                    <NavLink to='/skills' exact={true} activeClassName='active'>
                    Skills
                    </NavLink>
                </li>
                <li className={isActive4 ? "activeNavbutton" : "navbutton"} onClick={clickHandler4}>
                    <NavLink to='/projects' exact={true} activeClassName='active'> 
                    Projects
                    </NavLink>
                </li>
                <li className={isActive5 ? "activeNavbutton" : "navbutton"} onClick={clickHandler5}>
                    <NavLink to='/socials' exact={true} activeClassName='active'>
                    Socials
                    </NavLink>
                </li>
                <li className={isActive6 ? "activeNavbutton" : "navbutton"} onClick={clickHandler6}>
                    <NavLink to='/feedback' exact={true} activeClassName='active'>
                    Contact Me!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;