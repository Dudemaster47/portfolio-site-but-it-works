import { useState } from "react";
import Modal from "./modal.jsx";
import Slider from "./slider.jsx";
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
import ashLogo from "../images/ash-logo.png"

function ProjectLinks() {
    // const [p1Open, setp1Open] = useState(false);
    // const [p2Open, setp2Open] = useState(false);
    // const [p3Open, setp3Open] = useState(false);

    // const clickHandler1 = (e) => {
    //     e.preventDefault();
    //     setp1Open(!p1Open);
    // }

    // const clickHandler2 = (e) => {
    //     e.preventDefault();
    //     setp2Open(!p2Open);
    // }

    // const clickHandler3 = (e) => {
    //     e.preventDefault();
    //     setp3Open(!p3Open);
    // 
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [active1, setActive1] = useState(0);
    const [active2, setActive2] = useState(0);
    const [active3, setActive3] = useState(0);
    const [allowClick, setAllowClick] = useState(true);

    const homecookedImages = [
        {
            image_url: `${homecookedSplash}`,
            caption: "Homecooked Splash Page",
            body: "Homecooked was a group project developed in React-Redux with a Flask backend, a collective effort between myself, Megha Saghal, and Dan Yoo. Our concept was to make a combination of Doordash and Etsy; essentially, a place where you could create a store and sell your own home-cooked meals so that people could order out and still get that taste of home. This project was a major success, as we were able to implement all of our goals within the one-month period we had assigned to it. ",
            link: "https://home-cooked.onrender.com/",
            gitLink: "https://github.com/kympanic/homecooked/"
        },
        {
            image_url: `${homecookedProfile}`,
            caption: "Homecooked Profile Page",
            body: `Prominent Features of the app include:\n
            - Create a multi-role account allowing a user to be a customer or a store owner\n
            - Search for stores by product type\n
            - Display stores based on proximity to user\n
            - Purchase meals from other users\n
            - Review food items\n
            - Set up a virtual storefront to sell your own meals `,
            link: "https://home-cooked.onrender.com/",
            gitLink: "https://github.com/kympanic/homecooked/"
        },
        {
            image_url: `${homecookedShop}`,
            caption: "Homecooked Shop Page",
            body: `My role in the project included:\n
            - Project Planning\n
            - Logo Design\n
            - Wireframe Drafting\n
            - Webpage Design\n
            - CSS Style Guide & Touch Ups `,
            link: "https://home-cooked.onrender.com/",
            gitLink: "https://github.com/kympanic/homecooked/"
        },
        {
            image_url: `${homecookedCart}`,
            caption: "Homecooked Cart Page",
            body: `Several major challenges included:\n
            - Coordinating the group so we each tackled different problems independently\n
            - Collaborating to help partners with bugfixing\n
            - Unifying individual styles to work together\n
            - The Cart feature took a lot of trial and error, but after a lot of research and perseverance I was able to cleanly implement it.`,
            link: "https://home-cooked.onrender.com/",
            gitLink: "https://github.com/kympanic/homecooked/"
        }
    ];

    const cardgameImages = [
        {
            image_url: `${cardGameSplash}`,
            caption: "Card Games!! Splash Page",
            body: "Card Games!! was my portfolio project, intended to highlight my mastery of React-Redux. The intent was very simple; a website where you could play a variety of card games against a computer opponent or other players. Ultimately, I did not meet all of my goals due to the surprising level of difficulty involved in such a project, and the result is unfortunately bare-bones but functional as a single player experience. While multiplayer functionality proved too complex to implement, a single player card game (War) was developed and is fully playable- making it function within a React-Redux framework was a feat in of itself. ",
            link: "https://card-games.onrender.com/",
            gitLink: "https://github.com/Dudemaster47/Card-Game-Capstone"

        },
        {
            image_url: `${cardGameProfile}`,
            caption: "Card Games!! Profile Page",
            body: `Prominent features include:\n
            - One playable game mode (War), single player versus a CPU opponent\n
            - Game is on a timer to prevent endless play, the user can adjust the timer to their liking\n
            - Game can be paused and exited out of; the game remembers where it is left and will pick up where it is left off\n
            - Forfeiting is an option to quickly end a game\n
            - The art on the player's deck is customizable\n
            - Win and Loss statistics are tracked per user`,
            link: "https://card-games.onrender.com/",
            gitLink: "https://github.com/Dudemaster47/Card-Game-Capstone"
        },
        {
            image_url: `${cardGameHelp}`,
            caption: "Card Games!! Help Page",
            body: `Coding highlights included:\n
            - It turns out using React Redux and simple Javascript to make a web-based video game, even a simple one, is actually very difficult\n
            - The tools that React has to dynamically update webpages do not play well with things that need to update multiple times within a single function. The entire game is almost all javascript being used to update numerous variables almost constantly before feeding the final results into the React framework.\n
            - The fact that it is fully functional and bug-free is a massive accomplishment of software engineering. And perseverence.`,
            link: "https://card-games.onrender.com/",
            gitLink: "https://github.com/Dudemaster47/Card-Game-Capstone"
        },
        {
            image_url: `${cardGameGame}`,
            caption: "Card Games!! Game Page",
            body: `Challenges included:/n
            - REACT REDUX IS THE WRONG FRAMEWORK TO DESIGN A VIDEO GAME IN\n
            - Ultimately this project did not reach the level I wanted it to because it became far too cumbersome to expand it further than the single player experience due to the above reason\n
            - Other desired features would have required an almost total overhaul of much of the back end\n
            - Honestly if I were to revisit this, I would in fact start entirely from scratch and have the game be its own, separate program hosted by the app rather than built into it.`,
            link: "https://card-games.onrender.com/",
            gitLink: "https://github.com/Dudemaster47/Card-Game-Capstone"
        }
    ];

    const blackjackImages = [
        {
            image_url: `${blackjackStart}`,
            caption: "Blackjack Start Ascii",
            body: 'A simple, class-based javascript project designed to run purely in the console, requiring NodeJS to play. Able to recognize multiple players, make calculations on the fly, and track progress across multiple hands, the game is more or less feature complete and fully polished. The game is prompt-based and deterministic, allowing players to bet "money" to try and get a high score. High scores are not tracked.',
            link: "",
            gitLink: "https://github.com/Dudemaster47/blackjack2"
        },
        {
            image_url: `${blackjackBet}`,
            caption: "Blackjack Betting Prompt",
            body: `Prominent features include:\n
            - Play text-based blackjack in your command line!\n
            - Host it in a stream or gather up to 7 friends around your computer for local multiplayer!\n
            - You can bet! Play for a high score or until you run out of fake money!\n
            - The Dealer is always a CPU, no pesky card shuffling needed!`,
            link: "",
            gitLink: "https://github.com/Dudemaster47/blackjack2"
        },
        {
            image_url: `${blackjackCommands}`,
            caption: "Blackjack Help Dialog",
            body: `Coding highlights included:\n
            - Utilizes classes to handle players, cards, and decks\n
            - Functions are tied to classes, allowing for the complex game code to be quickly parsed and understood`,
            link: "",
            gitLink: "https://github.com/Dudemaster47/blackjack2"
        },
        {
            image_url: `${blackjackEnd}`,
            caption: "Blackjack End Ascii",
            body: `Challenges included:\n
            - Most of this was done solo\n
            - The game is fairly complex and prompt-based with branching outcomes, making the code itself difficult to read\n
            - It broke inexplicably after not having been touched for several months, requiring an unexpected bugfix.`,
            link: "",
            gitLink: "https://github.com/Dudemaster47/blackjack2"
        }
    ];

    const handleClick1 = (index) => {
        setActive1(0);
        setShow1(true);
        setAllowClick(false);
    };

    const handleClick2 = (index) => {
        setActive2(0);
        setShow2(true);
        setAllowClick(false);
    };

    const handleClick3 = (index) => {
        setActive3(0);
        setShow3(true);
        setAllowClick(false);
    };

    const onClose1 = () => {
        setShow1(false);
        setAllowClick(true);
    };

    const onClose2 = () => {
        setShow2(false);
        setAllowClick(true);
    };

    const onClose3 = () => {
        setShow3(false);
        setAllowClick(true);
    };

    return (
        <>
            <div className="headerbox">
                <div className="miniLogoOuter">
                    <img className="miniLogo" src={ashLogo} alt="logo" />
                </div>
                <div className="splashtext3">
                    <h1>Projects</h1> 
                </div>
            </div>
            <div className="projectBox">
                <div class={allowClick ? "projectInner" : "projectInnerOff"} onClick={allowClick ? (handleClick1) : null}>
                    <h2 className={allowClick ? "projectHeader" : "projectHeaderOff"} id="P1">Homecooked</h2>
                    <img className={allowClick ? "projectDemo" : "projectDemoOff"} src={homecookedSplash} alt="Click to open the Homecooked modal" />
                </div>
                <Modal show={show1} title="Homecooked" onClose={onClose1}>
                    <Slider images={homecookedImages} active={active1} setActive={setActive1} />
                </Modal>
                <div class={allowClick ? "projectInner" : "projectInnerOff"} onClick={allowClick ? (handleClick2) : null}>
                    <h2 className={allowClick ? "projectHeader" : "projectHeaderOff"} id="P2">Card Games!!</h2>
                    <img className={allowClick ? "projectDemo" : "projectDemoOff"} src={cardGameSplash} alt="Click to open the Card Games!! modal" />
                </div>
                <Modal show={show2} title="Card Games!!" onClose={onClose2}>
                    <Slider images={cardgameImages} active={active2} setActive={setActive2} />
                </Modal>
                <div class={allowClick ? "projectInner" : "projectInnerOff"} onClick={allowClick ? (handleClick3) : null}>
                    <h2 className={allowClick ? "projectHeader" : "projectHeaderOff"} id="P3">Blackjack.JS</h2>
                    <img className={allowClick ? "projectDemo" : "projectDemoOff"} src={blackjackStart} alt="Click to open the Blackjack.JS modal" />
                </div>
                <Modal show={show3} title="Blackjack.js" onClose={onClose3}>
                    <Slider images={blackjackImages} active={active3} setActive={setActive3} />
                </Modal>
                {/* <div className="infobox" id="I1" style={p1Open ? {transition: "all 0.75s ease", maxWidth: "95%", maxHeight: "400px", height: "400px", padding: "3%", marginTop: "2%", marginBottom: "2%"} : {maxWidth: "0", maxHeight: "0", height: "0", overflow: "hidden", whiteSpace: "nowrap", transition: "all 1s ease", padding: "0", margin: "0"}}>
                    <div className="textbox" style={p1Open ? {transition: "all 0.5s ease 0.7s", opacity: "1"} : {opacity: "0"}}>
                        <p>A fusion of Doordash and Etsy, it's a website where you can set up your own shop and sell homecooked food directly to the masses!
                            Built with a React-Redux front end and a Flask back end, it has a full suite of CRUD features and is fully functional. 
                            A user can order food from an existing store, create and customize their own store, review products, view the averaged score of a store, and even check out with a fully functional cart.
                            There's also a useful search function to search for exactly what you want to purchase. The logo was designed by yours truly, and the site was a group project with Megha Sahgal and Daniel Yoo.
                        </p>
                        <div className="linkBox">
                            <Link to="https://home-cooked.onrender.com/">Website</Link>
                            <Link to="https://github.com/kympanic/homecooked/">Github Link</Link>
                        </div>
                    </div>
                    <div className="picturebox" style={p1Open ? {transition: "all 0.5s ease 0.75s", opacity: "1"} : {transition: "all 0.25s ease", opacity: "0", overflow: "hidden"}}>
                        <div className="pbRow1">
                            <img className="projImg" src={homecookedSplash} alt="splash page of Homecooked" />
                            <img className="projImg" src={homecookedProfile} alt="profile page of Homecooked" />
                        </div>
                        <div className="pbRow2">
                            <img className="projImg" src={homecookedShop} alt="example menu on shop page of Homecooked" />
                            <img className="projImg" src={homecookedCart} alt="an empty cart in Homecooked" />
                        </div>
                    </div>
                </div> */}
                
                {/* <div className="infobox" id="I2" style={p2Open ? {transition: "all 0.75s ease", maxWidth: "95%", maxHeight: "400px", height: "400px", padding: "3%", marginTop: "2%", marginBottom: "2%"} : {maxWidth: "0", maxHeight: "0", height: "0", overflow: "hidden", whiteSpace: "nowrap", transition: "all 1s ease", padding: "0", margin: "0"}}>
                    <div className="textbox" style={p2Open ? {transition: "all 0.5s ease 0.7s", opacity: "1"} : {opacity: "0"}}>
                        <p>A fairly basic website where you can set up an account and play War against a CPU opponent. It was developed using a Flask back end and a React-Redux front end.
                            Currently, you can create a profile, add custom deck images to use for yourself, and create a game to play. The whole site isn't fully functional currently, but it does feature fully functioning gameplay.
                            I'll admit this is a bit rough appearance-wise and lacks in style, but the main focus is the game itself which works perfectly. Someday I'll return to it and add further functionality.
                        </p>
                        <div className="linkBox">                            
                            <Link to="https://card-games.onrender.com/">Website</Link>
                            <Link to="https://github.com/Dudemaster47/Card-Game-Capstone">Github Link</Link>
                        </div>
                    </div>
                    <div className="picturebox" style={p2Open ? {transition: "all 0.5s ease 0.75s", opacity: "1"} : {transition: "all 0.25s ease", opacity: "0", overflow: "hidden"}}>
                        <div className="pbRow1">
                            <img className="projImg" src={cardGameSplash} alt="splash page of Card Games!!" />
                            <img className="projImg" src={cardGameHelp} alt="help page of Card Games!!" />
                        </div>
                        <div className="pbRow2">
                            <img className="projImg" src={cardGameProfile} alt="profile page of Card Games!!" />
                            <img className="projImg" src={cardGameGame} alt="a game of War in progress in Card Games!!" />
                        </div>
                    </div>
                </div> */}
                {/* <div className="infobox" id="I3" style={p3Open ? {transition: "all 0.75s ease", maxWidth: "95%", maxHeight: "400px", height: "400px", padding: "3%", marginTop: "2%", marginBottom: "2%"} : {maxWidth: "0", maxHeight: "0", height: "0", overflow: "hidden", whiteSpace: "nowrap", transition: "all 1s ease", padding: "0", margin: "0"}}>
                    <div className="textbox" style={p3Open ? {transition: "all 0.5s ease 0.7s", opacity: "1"} : {opacity: "0"}}>
                        <p>A simple application that allows you to play blackjack in a VS Code terminal utilizing Node JS. Built entirely in javascript with a class-based architecture.
                            There's not a huge amount to say. It allows for single player and local multiplayer, and has a betting system and keeps track of "money" that is won and lost.
                            There's no dedicated website for this game, but it can be downloaded through github. To do: add a readme that explains how to play...
                        </p>
                        <div className="linkBox">   
                            <Link to="https://github.com/Dudemaster47/blackjack2">Github Link</Link>
                        </div>
                    </div>
                    <div className="picturebox" style={p3Open ? {transition: "all 0.5s ease 0.75s", opacity: "1"} : {transition: "all 0.25s ease", opacity: "0", overflow: "hidden"}}>
                        <div className="pbRow1">
                            <img className="projImg" src={blackjackStart} alt="the start picture for blackjack.js" />
                            <img className="projImg" src={blackjackCommands} alt="a help menu for blackjack.js" />
                        </div>
                        <div className="pbRow2">
                            <img className="projImg" src={blackjackBet} alt="what it looks like to place a bet in blackjack.js" />
                            <img className="projImg" src={blackjackEnd} alt="whoops, it looks like the house always wins in blackjack.js" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}

export default ProjectLinks;