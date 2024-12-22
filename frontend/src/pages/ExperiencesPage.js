import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";


import ExperienceList from '../components/ExperienceList';
import { Link } from 'react-router-dom';

function ExperiencesPage({ setExperience }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [experiences, setExperiences] = useState([]);

    // RETRIEVE the entire list of experiences
    const loadExperiences = async () => {
        const response = await fetch('/experiences');
        const experiences = await response.json();
        setExperiences(experiences);
    } 
    

    // UPDATE a single experience
    const onEditExperience = async experience => {
        setExperience(experience);
        redirect("/updateExperience");
    }


    // DELETE a single experience  
    const onDeleteExperience = async _id => {
        const response = await fetch(`/experiences/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/experiences');
            const experiences = await getResponse.json();
            setExperiences(experiences);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the experiences
    useEffect(() => {
        loadExperiences();
    }, []);
    

    // DISPLAY the experiences
    return (
        <>
            <h2>Professional Experiences Collection</h2>
            <article>
            <p>Below is a collection of my professional experiences. New Experiences can be added to the collection by clicking the 'Add Experience' button above the collection. Added experiences can then be edited by pressing the small delete and edit icons below. Feel free to add, edit, or delete as many experiences as you'd like!</p>
            <Link to="/addExperience" className="nav-link right-align">
            <RiAddBoxFill className="icon" />
                Add Experience
            </Link>
            <ExperienceList 
                experiences={experiences} 
                onEdit={onEditExperience} 
                onDelete={onDeleteExperience} 
            />
            </article>
        </>
    );
}

export default ExperiencesPage;