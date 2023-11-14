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

    //email might be potentially dangerous
    //it might be wiser to have an admin only comments database that stores this stuff as something other than plaintext to avoid security breaches
    //and have it alert me when a comment is made
    // this is a promise to myself to acutally code today
    // this is another promise to actually code
    
    return (
        
        <div className="splashbox">
            <form
                ref={form}
                onSubmit={sendEmail}
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
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};
