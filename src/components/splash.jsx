import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ashLogo from "../images/ash-logo.png"

function Splash(){
    const listItems1 = [<Link to='/aboutme' exact={true}><h1>About Me</h1></Link>, <Link to='/skills' exact={true}><h1>Skills</h1></Link>, <Link to='/projects' exact={true}><h1>Projects</h1></Link>]
    const listItems2 = [<Link><h1>Resumé</h1></Link>, <Link to='/feedback' exact={true}><h1>Contact Me!</h1></Link>]
    const navigate = useNavigate();
  

    const clickHandler = (e) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute("id")
        switch (target){
            case '0':
                navigate('/aboutme');
                break;
            case '1':
                navigate('/skills');
                break;
            case '2':
                navigate('/projects');
                break;
            case '0A':
                break;
            case '1A':
                navigate('/feedback');
                break;
        }
    }

    return (
        <>
            <div className="headerbox">
                <img className="logo" src={ashLogo} alt="logo" />
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
                    <li className="linkbox" id={idx} key={idx} style={{ animationDelay: `${200 * idx}ms` }} onClick={clickHandler}>{item}</li>
                    ))}
                </ul>
                <ul className="linklistRow2">
                    {listItems2.map((item, idx) => (
                    <li className="linkbox" id={`${idx}A`} key={`${idx}A`} style={{ animationDelay: `${200 * (idx+1)}ms` }} onClick={clickHandler}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Splash;