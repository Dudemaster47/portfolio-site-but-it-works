import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import githubLogo from '../images/github.png'
import linkedinLogo from '../images/linkedin.png'
import wellfoundLogo from '../images/Wellfound.png'
import ashLogo from "../images/ash-logo.png"

function Nav() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        switch (window.location.pathname){
            case '/aboutme':
                setIsActive2(true);
                setIsActive1(false);
                break;
            case '/skills':
                setIsActive3(true);
                setIsActive1(false);
                break;
            case '/projects':
                setIsActive4(true);
                setIsActive1(false);
                break;
            case '/feedback':
                setIsActive5(true);
                setIsActive1(false);
                break;
            default:
                setIsActive1(true);
                break;
        }
    })

    const clickHandler1 = (e) => {
        e.preventDefault();
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        navigate('/');
    }

    const clickHandler2 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(true);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        navigate('/aboutme');
    }

    const clickHandler3 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(true);
        setIsActive4(false);
        setIsActive5(false);
        navigate('/skills');
    }

    const clickHandler4 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(true);
        setIsActive5(false);
        navigate('/projects');
    }

    const clickHandler5 = (e) => {
        e.preventDefault();
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(true);
        navigate('/feedback');
    }

    return (
        <nav className="outerbar">
            <NavLink className="navLogoBG" to='/' exact={true} activeClassName='active' onClick={clickHandler1}>
                <img className="navLogo" src={ashLogo} alt="nav logo" />
            </NavLink>
            <ul className="navbar">
                <li id="A" className={isActive1 ? "activeNavbutton" : "navbutton"} onClick={clickHandler1}>
                    <NavLink to='/' exact={true} activeClassName='active'>
                    Home
                    </NavLink>
                </li>
                <li id="C" className={isActive3 ? "activeNavbutton" : "navbutton"} onClick={clickHandler3}>
                    <NavLink to='/skills' exact={true} activeClassName='active'>
                    Resume & Skills
                    </NavLink>
                </li>
                <li id="D" className={isActive4 ? "activeNavbutton" : "navbutton"} onClick={clickHandler4}>
                    <NavLink to='/projects' exact={true} activeClassName='active'> 
                    Projects
                    </NavLink>
                </li>
                <li id="B" className={isActive2 ? "activeNavbutton" : "navbutton"} onClick={clickHandler2}>
                    <NavLink to='/aboutme' exact={true} activeClassName='active'>
                    About Me
                    </NavLink>
                </li>
                <li id="E" className={isActive5 ? "activeNavbutton" : "navbutton"} onClick={clickHandler5}>
                    <NavLink to='/feedback' exact={true} activeClassName='active'>
                    Contact Me!
                    </NavLink>
                </li>
                <li id="F" className="navbutton2">
                    <ul className="socialList">
                        <li className="socialIcon">
                            <a href="https://www.linkedin.com/in/alex-hiller-422baa163/">
                                <img src={linkedinLogo} className="logoImg" alt="LinkedIn" />
                            </a>
                        </li>
                        <li className="socialIcon">
                            <a href="https://wellfound.com/u/alex-hiller">
                                <img src={wellfoundLogo} className="logoImg" alt="Wellfound"/>
                            </a>
                        </li>
                        <li className="socialIcon">
                            <a href="https://github.com/Dudemaster47">
                                <img src={githubLogo} className="logoImg" alt="Github" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;