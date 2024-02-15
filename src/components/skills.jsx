import ashLogo from "../images/ash-logo.png";
import "./skills.css"

function Skills() {
    //gotta overhaul this anyway so
    //might as well start over
    // two columns
    // left column is a resume in brief
    // right column is a fun list of skills
    //

    return (
        <>
            <div className="headerbox">
                <div className="miniLogoOuter">
                    <img className="miniLogo" src={ashLogo} alt="logo" />
                </div>
                <div className="splashtext3 resHeader">
                    <h1>Resume and Skills</h1>
                </div>
            </div>

            <div className="skillWrapper">
                <div className="resColumn">
                    <div className="eduList">
                        <h3>Education</h3>
                    </div>
                    <div className="workList">
                        <h3>Work Experience</h3>
                    </div>
                    <div className="researchList">
                        <h3>College Research</h3>
                    </div>
                </div>
                <div classname="skillColumn">
                    <div className="compuList">
                        <h3>Computational Skills</h3>
                    </div>
                    <div className="sciList">
                        <h3>Scientific Skills</h3>
                    </div>
                    <div className="personList">
                        <h3>Interpersonal Skills</h3>
                    </div>
                    <div className="miscList">
                        <h3>Miscellaneous Skills</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
