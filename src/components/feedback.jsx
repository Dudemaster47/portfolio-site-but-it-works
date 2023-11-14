import { useState } from "react";

function Feedback () {

    //email might be potentially dangerous
    //it might be wiser to have an admin only comments database that stores this stuff as something other than plaintext to avoid security breaches
    //and have it alert me when a comment is made
    // this is a promise to myself to acutally code today
    // this is another promise to actually code
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

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
            </form>
        </div>
    )

}

export default Feedback;