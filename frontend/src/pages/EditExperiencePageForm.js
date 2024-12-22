import React, { useState }  from 'react';
import { RiCheckboxCircleFill }  from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const EditExperiencePageForm = ({ experience }) => {
 
    const [position, setPosition]       = useState(experience.position);
    const [duration, setDuration]         = useState(experience.duration);
    const [date, setDate]            = useState(experience.date);
    const [skills, setSkills]       = useState(experience.skills);
    const [language, setLanguage] = useState(experience.language);
    
    const redirect = useNavigate();

    const editExperience = async () => {
        const response = await fetch(`/experiences/${experience._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                position: position, 
                duration: duration, 
                date: date,
                skills: skills,
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Yay! Your edits have been saved successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Oops! We were Unable to add your experience. Please try again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/experience");
    }

    return (
        <>
        <article>
            <h2>Edit an experience</h2>
            <p>Make as many changes as you'd like below by editing the desired field or fields. Simply press 'Save' when you are editing. </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which experience would you like to edit?</legend>
                    <label for="position">Experience position</label>
                    <input
                        type="text"
                        value={position}
                        onChange={e => setPosition(e.target.value)} 
                        id="position" />
                    
                    <label for="duration">Duration of position</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={e => setDuration(e.target.value)} 
                        id="duration" />
                    <label for="date">Position end date:</label>
                    <input
                        type="date"
                        value={date.slice(0,10)}
                        placeholder="Position end date"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    
                    <label for="skills">Skills</label>
                    <input
                        type="text"
                        value={skills}
                        onChange={e => setSkills(e.target.value)} 
                        id="skills" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="save">
                        <button
                        onClick={editExperience}
                        id="save-button"
                        class="save-button"
                    >
                        <RiCheckboxCircleFill />
                        <strong>Save Experience Edits</strong>
                    </button> 
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExperiencePageForm;