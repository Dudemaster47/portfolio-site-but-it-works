function Feedback () {

    return (
        <div class="splashbox">
            <form action="mailto:asonnyhiller@gmail.com">
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" rows="5" cols="33" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Feedback;