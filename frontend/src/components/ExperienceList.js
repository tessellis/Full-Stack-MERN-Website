import React from 'react';
import Experience from './Experience';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ExperienceList({ experiences, onEdit, onDelete }) {
    return (
        <table id="experiences">
            <caption>Add and Edit Professional Experiences</caption>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Duration</th>
                    <th>End Date</th>
                    <th>Skills</th>
                    <th>Language</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {experiences.map((experience, i) => 
                    <Experience 
                        experience={experience} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ExperienceList;
