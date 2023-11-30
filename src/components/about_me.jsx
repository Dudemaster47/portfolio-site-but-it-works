import { Link } from "react-router-dom";
import roo from "../images/roo1.jpg"
import me from "../images/me.jpg"

function AboutMe(){
    const listItems3 = [<Link><h1>Writing Samples</h1></Link>, <Link><h1>Art Gallery</h1></Link>, <Link><h1>Music Player</h1></Link>]
    return (
        <>
            <div className="headerbox">
                    <div className="splashtext3">
                        <h1>About Me</h1> 
                    </div>
            </div>
            <div className="aboutMeRows">
                <div className="aboutMeRow1">
                    <div className="rooBox">
                        <Link><img className="roopic" src={roo} alt="Click this picture of my cat for more pictures of my cat!" /></Link>
                    </div>
                    <div className="splashbox">
                        <p>I'm an artist, a writer, a musician, a scientist, and a programmer.</p>
                        <p>I'm also a foodie, an avid gamer, a loving uncle, and the proud dad of one really adorable cat!</p>
                        <p>I've got a lot to offer the world, and I'm looking for new challenges that will allow me to do so.</p>
                        <p>Plus, I've got a little feline lady relying on me who deserves to be spoiled rotten.</p>
                        <p>In the meantime, I'm always looking for some new project to funnel my endless creative energy into.</p> 
                        <p>It can be hard to balance so many outlets, but I find a way!</p>
                        <p>If I had to say where my talents lie, it'd probably be front end programming and design.</p>
                        <p>UI/UX design is fun, and a passion of mine. But I'm just as capable on the back end, full stack baby!</p>
                        <p>(If you think my cat, Roo, is adorable, click on her for more pics!)</p>
                    </div>
                    <div className="rooBox">
                        <p className="metext">This is just a picture of me. There is nothing fancy here.</p>
                        <img className="mepic" src={me} alt="This is just a picture of me. There is no fancy functionality." />
                    </div>
                </div>
                <div className="aboutMeRow2">
                    <div className="linklist">
                        <ul className="linklistRow1">
                            {listItems3.map((item, idx) => (
                            <li className="linkbox" id={idx} key={idx} style={{ animationDelay: `${200 * idx}ms` }} >{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutMe;