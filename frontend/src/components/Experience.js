import React from 'react';
// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";


function Experience({ experience, onEdit, onDelete }) {
    return (
        <tr>
            <td>{experience.position}</td>
            <td>{experience.duration}</td>
            <td>{experience.date.slice(0,10)}</td>
            <td>{experience.skills}</td>
            <td>{experience.language}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin5Line class="delete-button" onClick={() => onDelete(experience._id)} /></td>
            <td><RiEdit2Line class="edit-button" onClick={() => onEdit(experience)} /></td>
        </tr>
    );
}

export default Experience;