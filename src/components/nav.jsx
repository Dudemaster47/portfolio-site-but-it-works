import { NavLink } from 'react-router-dom';

const nav = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink>
                    Top
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    Socials
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    Contact Me!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default nav;