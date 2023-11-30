import { Link } from "react-router-dom";

function AboutMe(){
    const listItems3 = [<Link><h1>Writing Samples</h1></Link>, <Link><h1>Art Gallery</h1></Link>, <Link><h1>Music Player</h1></Link>]
    return (
        <div className="aboutMeRows">
            <div className="aboutMeRow1">
                <div className="splashbox">
                    <p>I'm an artist, a writer, a musician, a scientist, and a programmer.</p>
                    <p>I'm also a foodie, an avid gamer, an uncle, and the proud dad of one really adorable cat!</p>
                    <p>I've got a lot to offer the world, and I'm looking for new challenges that will allow me to do so!</p>
                    <p>In the meantime, I'm always looking for some new project to funnel my endless creative energy into; it can be hard to balance so many outlets but I find a way!</p>
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
    )

}

export default AboutMe;