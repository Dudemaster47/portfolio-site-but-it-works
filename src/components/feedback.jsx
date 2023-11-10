import { useState } from "react";
import axios from 'axios';
import $ from "jquery";

const API_PATH = 'http://localhost:1992/portfolio/PHP/server.php';

function Feedback () {

    //email might be potentially dangerous
    //it might be wiser to have an admin only comments database that stores this stuff as something other than plaintext to avoid security breaches
    //and have it alert me when a comment is made
    // this is a promise to myself to acutally code today

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [sent, setSent] = useState(false)
    const [errors, setErrors] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.textcontent);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        console.log(form)
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: form.serialize()
        }).then(result =>
            setSent(result.sent)
        )
        .catch(errors => setErrors("Something Went Wrong"));
    };
    

    return (
        
        <div className="splashbox">
            <form
                action="#"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) =>
                        handleNameChange(event)
                    }
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) =>
                        handleEmailChange(event)
                    }
                />
                <br />
                <label htmlFor="comment">Comment:</label>
                <textarea 
                    name="comment" 
                    rows="5" 
                    cols="33" 
                    id="comment"
                    textcontent = {comment}
                    onChange={(event) => 
                        handleCommentChange(event)
                        }
                />
                <button type="submit">Submit</button>
                <div>
                    {sent && 
                    <div>Thank you for contacting me!</div>}
                </div>
                <div>
                    {errors &&
                    <div>{errors}</div>}
                </div>
            </form>
        </div>
    )

}

export default Feedback;