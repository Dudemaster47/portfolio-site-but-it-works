import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ashLogo from "../images/ash-logo.png";

export const Feedback = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_34ffhff",
                "template_a7efzwo",
                form.current,
                "upzXRB1xcGlkey4qB"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className="headerbox">
                <div className="splashtext3">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <div className="feedbackBox">
                <div className="formBox">
                    <p className="feedbackShpiel">
                        Thanks for visiting my portfolio page! I hope to expand
                        it further in the future- if you're interested in
                        getting in contact with me, just leave your name, email
                        address, and a message here and I'll respond as soon as
                        possible.
                    </p>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="commentForm"
                    >
                        <label htmlFor="name">Name: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="user_name"
                        />
                        <label htmlFor="email">Email: </label>
                        <input
                            className="textBox"
                            type="email"
                            name="user_email"
                        />
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="textBox bigBox"
                            name="message"
                            rows="5"
                            cols="33"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="submitButton"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};
