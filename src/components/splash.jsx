import { Link } from "react-router-dom";

function Splash(){
    const listItems1 = [<Link to='/aboutme' exact={true}><h1>About Me</h1></Link>, <Link to='/skills' exact={true}><h1>Skills</h1></Link>, <Link to='/projects' exact={true}><h1>Projects</h1></Link>]
    const listItems2 = [<Link><h1>Resumé</h1></Link>, <Link to='/feedback' exact={true}><h1>Contact Me!</h1></Link>]

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
                <ul className="linklistRow1">
                    {listItems1.map((item, idx) => (
                    <li className="linkbox" id={idx} key={idx} style={{ animationDelay: `${200 * idx}ms` }} >{item}</li>
                    ))}
                </ul>
                <ul className="linklistRow2">
                    {listItems2.map((item, idx) => (
                    <li className="linkbox" id={`${idx}A`} key={`${idx}A`} style={{ animationDelay: `${200 * (idx+1)}ms` }}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Splash;