import { Link } from "react-router-dom";

function Splash(){
    return (
        <>
            <div className="headerbox">
                <div className="innerHeaderbox">
                    <div className="splashtext1">
                        <h1>Hi,</h1> 
                    </div>
                    <div className="splashtext2">
                        <h1>I'm Alex Hiller!</h1>
                    </div>
                </div>
            </div>
            <div className="linklist">
                <div className="linklistRow1">
                    <div className="linkbox">
                        <Link to='/aboutme' exact={true}><h2>About Me</h2></Link>
                    </div>
                    <div className="linkbox">
                        <Link to='/skills' exact={true}><h2>Skills</h2></Link>
                    </div>
                    <div className="linkbox">
                        <Link to='/projects' exact={true}><h2>Projects</h2></Link>
                    </div>
                </div>
                <div className="linklistRow2">
                    <div className="linkbox">
                        <Link><h2>Resume</h2></Link>
                    </div>
                    <div className="linkbox">
                        <Link to='/feedback' exact={true}><h2>Contact Me</h2></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash;