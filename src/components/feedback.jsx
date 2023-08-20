const feedback = () => {

    return (
        <>
            <form onSubmit = {null}>
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

export default feedback;