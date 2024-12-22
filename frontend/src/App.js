// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import './App.css';
import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';





// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
// import './pages/products.js'; // Products page 
// import './pages/TopicsPage.js'; // Topics page 
// import './pages/HomePage.js'; // Homepage

import ExperiencesPage from './pages/ExperiencesPage'; 

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddExperiencePageForm from './pages/AddExperiencePageForm.js';
import EditExperiencePageForm from './pages/EditExperiencePageForm.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [experience, setExperience] = useState([])

  return (
    <>
      <BrowserRouter>
      
        <header> 
            <img src="tess-logo-192x192.png" alt="Tess Ellis" width="50" height="auto" />
            <h1>Tess Ellis</h1> 
        </header>
          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    {/* {import HomePage from '.Homepage'} */}

                    <Route path="/" exact element={<HomePage  />} />
                    <Route path="/topics" element={<TopicsPage />}  />
                    <Route path="/gallery" element={<GalleryPage />} />
              
                    
                    <Route path="/experience" element={<ExperiencesPage setExperience={setExperience}/>} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/addExperience" element={<AddExperiencePageForm />} />   
                     <Route path="/updateExperience" element={<EditExperiencePageForm experience={experience} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Tess Ellis</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;