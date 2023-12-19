import ashLogo from "../images/ash-logo.png";

function Skills(){

    return (
        <>
            <div className="headerbox">
                <div className="miniLogoOuter">
                    <img className="miniLogo" src={ashLogo} alt="logo" />
                </div>
                <div className="splashtext3">
                    <h1>Skills</h1> 
                </div>
            </div>
            <div className="skillbox">
                <h3 className="skillheader" id="skillheader1">Computational Skills</h3>
                <ul className="skillchild1">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Flask</li>
                    <li>Sequelize</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>Microsoft Office Proficiency (Powerpoint, Excel, Word)</li>
                </ul>
                <h3 className="skillheader" id="skillheader2">Scientific Skills</h3>
                <ul className="skillchild2">
                    <li>Spectroscopy (UV-Vis, IR, Fluorescence, NMR, Mass Spec.)</li>
                    <li>Chromatography (Gas, HPLC)</li>
                    <li>Reagent and Working Solution Prep</li>
                    <li>Safe Handling of Strong Acids and Toxic Chemicals</li>
                    <li>Waste Management</li>
                </ul>
                <h3 className="skillheader" id='skillheader3'>Interpersonal Skills</h3>
                <ul className="skillchild3">
                    <li>Funny</li>
                    <li>Charming</li>
                    <li>Witty</li>
                    <li>Caring</li>
                    <li>Generous</li>
                    <li>Has Worked Retail Before</li>
                    <li>Loves Animals</li>
                    <li>Loves Kids</li>
                    <li>Follows Directions Well</li>
                    <li>Keeps Head Down</li>
                </ul>
                <h3 className="skillheader" id='skillheader4'>Miscellaneous Skills</h3>
                <ul className="skillchild4">
                    <li>Black Belt</li>
                    <li>Excellent Cook</li>
                    <li>Musician</li>
                    <li>Composer</li>
                    <li>Artist</li>
                    <li>Writer</li>
                    <li>Tabletop Gaming Enthusiast (I'm the eternal Game Master, so you KNOW I can manage people)</li>
                </ul>
            </div>
        </>
    )
}

export default Skills;