import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {

    return (
        <div className="footwrapper">
            <div className="footText">
                <p>Copyright © 2024 Alex Hiller - All Rights Reserved</p>
                <Link to='/feedback' exact={true}><p>Contact Me!</p></Link>
            </div>
        </div>
    )
}

export default Footer;