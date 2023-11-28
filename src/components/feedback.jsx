import { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Feedback = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'template_a7efzwo',form.current,'upzXRB1xcGlkey4qB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        
        <div className="splashbox">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="commentForm"
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="user_name"
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="user_email"
                />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    rows="5"
                    cols="33"
                />
                <input type="submit" value="Send" className="submitButton"/>
            </form>
        </div>
    );
};
