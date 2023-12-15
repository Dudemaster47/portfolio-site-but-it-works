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

    const homecookedImages = [
        {
            image_url: `${homecookedSplash}`,
            caption: "Homecooked Splash Page"
        },
        {
            image_url: `${homecookedProfile}`,
            caption: "Homecooked Profile Page"
        },
        {
            image_url: `${homecookedShop}`,
            caption: "Homecooked Shop Page"
        },
        {
            image_url: `${homecookedCart}`,
            caption: "Homecooked Cart Page"
        }
    ];

    const cardgameImages = [
        {
            image_url: `${cardGameSplash}`,
            caption: "Card Games!! Splash Page"
        },
        {
            image_url: `${cardGameProfile}`,
            caption: "Card Games!! Profile Page"
        },
        {
            image_url: `${cardGameHelp}`,
            caption: "Card Games!! Help Page"
        },
        {
            image_url: `${cardGameGame}`,
            caption: "Card Games!! Game Page"
        }
    ];

    const blackjackImages = [
        {
            image_url: `${blackjackStart}`,
            caption: "Blackjack Start Ascii"
        },
        {
            image_url: `${blackjackBet}`,
            caption: "Blackjack Betting Prompt"
        },
        {
            image_url: `${blackjackCommands}`,
            caption: "Blackjack Help Dialog"
        },
        {
            image_url: `${blackjackEnd}`,
            caption: "Blackjack End Ascii"
        }
    ];

    const handleClick1 = (index) => {
        setActive1(0);
        setShow1(true);
    };

    const handleClick2 = (index) => {
        setActive2(0);
        setShow2(true);
    };

    const handleClick3 = (index) => {
        setActive3(0);
        setShow3(true);
    };

    const onClose1 = () => {
        setShow1(false);
    };

    const onClose2 = () => {
        setShow2(false);
    };

    const onClose3 = () => {
        setShow3(false);
    };

    return (
        <>
            <div className="headerbox">
                <div className="splashtext3">
                    <h1>Projects</h1> 
                </div>
            </div>
            <div className="projectBox">
                <h2 className="projectHeader" id="P1" onClick={handleClick1}>Homecooked</h2>
                <Modal show={show1} title="Homecooked" onClose={onClose1}>
                    <Slider images={homecookedImages} active={active1} setActive={setActive1} />
                </Modal>
                <h2 className="projectHeader" id="P2" onClick={handleClick2}>Card Games!!</h2>
                <Modal show={show2} title="Card Games!!" onClose={onClose2}>
                    <Slider images={cardgameImages} active={active2} setActive={setActive2} />
                </Modal>
                <h2 className="projectHeader" id="P3" onClick={handleClick3}>Blackjack.JS</h2>
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