import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectLinks() {
    const [p1Open, setp1Open] = useState(false);
    const [p2Open, setp2Open] = useState(false);
    const [p3Open, setp3Open] = useState(false);

    return (
        // <div className="splashbox">
        //     <ul>
        //         <li>
        //             <a href="https://home-cooked.onrender.com/">Homecooked</a>
        //         </li>
        //         <li>
        //             <a href="https://card-games.onrender.com/">Card Game!!</a>
        //         </li>
        //         <li>
        //             <a href="https://github.com/Dudemaster47/blackjack2">Blackjack (Download Link)</a>
        //         </li>
        //     </ul>
        // </div>
        <>
            <div className="projectBox">
                <h3 className="projectHeader" id="P1">Homecooked</h3>
                <div className="infobox" id="I1">
                    <div className="textbox">
                        <p>A fusion of Doordash and Etsy, it's a website where you can set up your own shop and sell homecooked food directly to the masses!
                            Built with a React-Redux front end and a Flask back end, it has a full suite of CRUD features and is fully functional. 
                            A user can order food from an existing store, create and customize their own store, review products, view the averaged score of a store, and even check out with a fully functional cart.
                            There's also a useful search function to search for exactly what you want to purchase. The logo was designed by yours truly, and the site was a group project with Megha Sahgal and Daniel Yoo.
                        </p>
                        <Link to="https://home-cooked.onrender.com/">Website</Link>
                        <Link to="https://github.com/kympanic/homecooked/">Github Link</Link>
                    </div>
                    <div className="picturebox">

                    </div>

                </div>
                <h3 className="projectHeader" id="P2">Card Games!!</h3>
                <div className="infobox" id="I2">
                    <div className="textbox">
                        <p>A fairly basic website where you can set up an account and play War against a CPU opponent. It was developed using a Flask back end and a React-Redux front end.
                            Currently, you can create a profile, add custom deck images to use for yourself, and create a game to play. The whole site isn't fully functional currently, but it does feature fully functioning gameplay.
                            I'll admit this is a bit rough appearance-wise and lacks in style, but the main focus is the game itself which works perfectly. Someday I'll return to it and add further functionality.</p>
                    </div>
                    <div className="picturebox">

                    </div>
                </div>
                <h3 className="projectHeader" id="P3">Blackjack.JS</h3>
                <div className="infobox" id="I3">
                    <div className="textbox">
                        <p>A simple application that allows you to play blackjack in a VS Code terminal utilizing Node JS. Built entirely in javascript with a class-based architecture.
                            There's not a huge amount to say. It allows for single player and local multiplayer, and has a betting system and keeps track of "money" that is won and lost. 
                        </p>
                    </div>
                    <div className="picturebox">
                        
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProjectLinks;