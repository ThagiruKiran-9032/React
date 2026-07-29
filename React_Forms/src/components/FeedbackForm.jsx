import React, { useState } from "react";

function FeedbackForm() {
    const [feedback, setFeedback] = useState({
        type: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(feedback);

        // Reset the form
        setFeedback(() => ({
            type: "",
            message: ""
        }));


    }

    return (
        <div>
            <h2>Feedback Form</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Type of Feedback :  
                    
                    <select name="type" value={feedback.type} onChange={handleChange}>
                        <option value="">
                            -- Select Feedback Type --
                        </option>
                        <option value="Complaint">Complaint</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Praise">Praise</option>
                    </select>
                </label>

                <br /><br />

                <label>
                    Message : 
                    <br />

                    <textarea
                        name="message"
                        value={feedback.message}
                        onChange={handleChange}
                        placeholder="Write your feedback here"
                        rows="5"
                        cols="40"
                    />
                </label>

                <br /><br />

                <button type="submit">
                    Submit
                </button>
            </form>

            <h3>Your Feedback:</h3>
            <p>{feedback.type} : {feedback.message}</p>
            
            
        </div>
    );
}

export default FeedbackForm;