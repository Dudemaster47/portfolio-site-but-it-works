import { useState } from "react";
import { Link } from "react-router-dom";
import homecookedSplash from "../images/homecooked splash.png";
import homecookedProfile from "../images/homecooked profile.png";
import homecookedShop from "../images/homecooked shop.png";
import homecookedCart from "../images/homecooked cart.png";
import cardGameSplash from "../images/card game splash.png";
import cardGameProfile from "../images/card game profile.png"
import cardGameHelp from "../images/card game help.png";
import cardGameGame from "../images/card game game.png";
import blackjackStart from "../images/blackjack start.png";
import blackjackBet from "../images/blackjack betting.png";
import blackjackCommands from "../images/blackjack commands.png";
import blackjackEnd from "../images/blackjack end.png";

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
                        <img src={homecookedSplash} alt="splash page of Homecooked" />
                        <img src={homecookedProfile} alt="profile page of Homecooked" />
                        <img src={homecookedShop} alt="example menu on shop page of Homecooked" />
                        <img src={homecookedCart} alt="an empty cart in Homecooked" />
                    </div>

                </div>
                <h3 className="projectHeader" id="P2">Card Games!!</h3>
                <div className="infobox" id="I2">
                    <div className="textbox">
                        <p>A fairly basic website where you can set up an account and play War against a CPU opponent. It was developed using a Flask back end and a React-Redux front end.
                            Currently, you can create a profile, add custom deck images to use for yourself, and create a game to play. The whole site isn't fully functional currently, but it does feature fully functioning gameplay.
                            I'll admit this is a bit rough appearance-wise and lacks in style, but the main focus is the game itself which works perfectly. Someday I'll return to it and add further functionality.
                        </p>
                        <Link to="https://card-games.onrender.com/">Website</Link>
                        <Link to="https://github.com/Dudemaster47/Card-Game-Capstone">Github Link</Link>
                    </div>
                    <div className="picturebox">
                        <img src={cardGameSplash} alt="splash page of Card Games!!" />
                        <img src={cardGameHelp} alt="help page of Card Games!!" />
                        <img src={cardGameProfile} alt="profile page of Card Games!!" />
                        <img src={cardGameGame} alt="a game of War in progress in Card Games!!" />
                    </div>
                </div>
                <h3 className="projectHeader" id="P3">Blackjack.JS</h3>
                <div className="infobox" id="I3">
                    <div className="textbox">
                        <p>A simple application that allows you to play blackjack in a VS Code terminal utilizing Node JS. Built entirely in javascript with a class-based architecture.
                            There's not a huge amount to say. It allows for single player and local multiplayer, and has a betting system and keeps track of "money" that is won and lost.
                            There's no dedicated website for this game, but it can be downloaded through github. To do: add a readme that explains how to play...
                        </p>
                        <Link to="https://github.com/Dudemaster47/blackjack2">Github Link</Link>
                    </div>
                    <div className="picturebox">
                        <img src={blackjackStart} alt="the start picture for blackjack.js" />
                        <img src={blackjackCommands} alt="a help menu for blackjack.js" />
                        <img src={blackjackBet} alt="what it looks like to place a bet in blackjack.js" />
                        <img src={blackjackEnd} alt="whoops, it looks like the house always wins in blackjack.js" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProjectLinks;