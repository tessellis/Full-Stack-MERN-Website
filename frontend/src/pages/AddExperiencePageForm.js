import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RiAddBoxFill } from "react-icons/ri";


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddExperiencePageForm = () => {

    const [position, setPosition]       = useState('');
    const [duration, setDuration]         = useState('');
    const [date, setDate]    = useState('');
    const [skills, setSkills]       = useState('');
    const [language, setLanguage] = useState('');
    const redirect = useNavigate();

    const addExperience = async () => {
        const newExperience = { position, duration, date, skills, language };
        const response = await fetch('/experiences', {
            method: 'post',
            body: JSON.stringify(newExperience),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You succesfully added a new experience!`);
            redirect("/experience");
        } else {
            alert(`Oops! We were Unable to add your experience. Please try again. = ${response.status}`);
            redirect("/experience");
        }
    };


    return (
        <>
        <article>
            <h2>Add an experience</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which experience would you like to add?</legend>
                    <label for="position">Experience position</label>
                    <input
                        type="text"
                        placeholder="Title of experience"
                        value={position}
                        onChange={e => setPosition(e.target.value)} 
                        id="position" />
                    
                    <label for="duration">Position duration</label>
                    <input
                        type="number"
                        value={duration}
                        placeholder="Duration"
                        onChange={e => setDuration(e.target.value)} 
                        id="duration" />
                    <label for="date">Position end date</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Position end date"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    
                    <label for="skills">Skill or skills used in position</label>
                    <input
                        type="text"
                        placeholder="Position skills"
                        value={skills}
                        onChange={e => setSkills(e.target.value)} 
                        id="skills" />

                    <label for="language">Language used in position</label>
                    <input
                        type="text"
                        placeholder="Language used in position"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="edit">
                    <button
                        onClick={addExperience}
                        id="add-button"
                        class="add-button"
                    >
                        <RiAddBoxFill />
                        <strong>Add Experience</strong>
                    </button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExperiencePageForm;