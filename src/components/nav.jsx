import { NavLink } from 'react-router-dom';

const nav = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact={true}>
                    Top
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aboutme' exact={true}>
                    About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/skills' exact={true}>
                    Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' exact={true}>
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/socials' exact={true}>
                    Socials
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/feedback' exact={true}>
                    Contact Me!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default nav;