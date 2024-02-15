import ashLogo from "../images/ash-logo.png";
import "./skills.css";

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
                        <ul className="resUL">
                            <li>
                                Bachelors of Science (Chemistry) | Framingham
                                State University 2014-2019
                            </li>
                            <li>
                                Software Development | App Academy 2022-2023
                            </li>
                        </ul>
                    </div>
                    <div className="workList">
                        <h3>Work Experience</h3>
                        <ul className="resUL">
                            <li>
                                Field Engineer | Research Scientific Services
                                2020-2021
                            </li>
                            <li>
                                Lab Technician | 21st Century Biochemicals
                                2019-2020
                            </li>
                            <li>Line Cook | Longhorn Steak House 2015-2016</li>
                            <li>Delivery Driver | Domino's Pizza 2013-2014</li>
                        </ul>
                    </div>
                    <div className="researchList">
                        <h3>College Research</h3>
                        <ul className="resUL">
                            <li>
                                Photodecomposition of Tetrachloroaurate in the
                                Presence of Varied Alcoholic Solvents
                            </li>
                            <li>
                                Undergraduate Research with Dr. Jesse Marcum |
                                2017-2018
                            </li>
                        </ul>
                    </div>
                </div>
                <div classname="skillColumn">
                    <div className="compuList">
                        <h3>Computational Skills</h3>
                        <ul className="resUL">
                            <li>React</li>
                            <li>Redux</li>
                            <li>Flask</li>
                            <li>Sequelize</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>Microsoft Office Suite</li>
                        </ul>
                    </div>
                    <div className="sciList">
                        <h3>Scientific Skills</h3>
                        <ul className="resUL">
                            <li>
                                Spectroscopy (UV-Vis, IR, Fluorescence, NMR,
                                Mass Spec.)
                            </li>
                            <li>Chromatography (Gas, HPLC)</li>
                            <li>Reagent and Working Solution Prep</li>
                            <li>
                                Safe Handling of Strong Acids and Toxic
                                Chemicals
                            </li>
                            <li>Waste Management</li>
                        </ul>
                    </div>
                    <div className="personList">
                        <h3>Interpersonal Skills</h3>
                        <ul className="resUL">
                            <li>Funny</li>
                            <li>Charming</li>
                            <li>Good Team Player</li>
                            <li>Caring</li>
                            <li>Generous</li>
                            <li>Has Worked Retail Before</li>
                            <li>Loves Kids</li>
                            <li>Loves Animals</li>
                            <li>Follows Directions Well</li>
                            <li>Keeps Head Down</li>
                        </ul>
                    </div>
                    <div className="miscList">
                        <h3>Miscellaneous Skills</h3>
                        <ul className="resUL">
                            <li>Black Belt</li>
                            <li>Excellent Cook</li>
                            <li>Musician</li>
                            <li>Composer</li>
                            <li>Artist</li>
                            <li>Writer</li>
                            <li>Tabletop Gaming Enthusiast</li>
                            <li>Eternal Game Master (master of herding cats)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
