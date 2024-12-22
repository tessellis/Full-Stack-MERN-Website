import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiGalleryFill, RiBookletLine, RiHome4Line, RiComputerLine} from "react-icons/ri";






// Change the function names and links
// to fit your portfolio topic.

function Navigate() {
  return (
    <nav className="Navigation">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/" ><i><RiHome4Line /></i>Home</NavLink>
        <NavLink to="/experience" ><i><RiBookletLine /></i>Experiences</NavLink>
        <NavLink to="/topics" ><i><RiComputerLine /></i>Topics</NavLink>
        <NavLink to="/gallery"><i><RiGalleryFill /></i>Gallery</NavLink>
    </nav>
  );
}

export default Navigate;
