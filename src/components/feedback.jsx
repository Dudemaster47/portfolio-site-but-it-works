function Feedback () {

    return (
        <>
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
        </>
    )

}

export default Feedback;