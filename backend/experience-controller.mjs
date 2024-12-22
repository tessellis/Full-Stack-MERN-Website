// Controllers for the Experience Collection

import 'dotenv/config';
import express from 'express';
import * as experiences from './experience-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/experiences', (req,res) => { 
    experiences.createExperience(
        req.body.position, 
        req.body.duration,
        req.body.date, 
        req.body.skills,
        req.body.language
        )
        .then(experience => {
            console.log(`"${experience.position}" was added to the experiences collection successfully.`);
            res.status(201).json(experience);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Oops! Your experience could not be added to the collection. Try again' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/experiences', (req, res) => {
    experiences.retrieveExperiences()
        .then(experience => { 
            if (experience !== null) {
                console.log(`All experiences were retrieved from the collection.`);
                res.json(experience);
            } else {
                res.status(404).json({ Error: '404: Oops! We were unable to locate that experience. Please try Again.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400: Oops! The server could not process the experience request. Try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/experiences/:_id', (req, res) => {
    experiences.retrieveExperienceByID(req.params._id)
    .then(experience => { 
        if (experience !== null) {
            console.log(`"${experience.position}" was retrieved, based on its ID.`);
            res.json(experience);
        } else {
            res.status(404).json({ Error: '404: Oops! We were unable to locate the experience ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '400: Oops! The server could not process the experience ID request. Try again.' });
    });

});


// UPDATE controller ************************************
app.put('/experiences/:_id', (req, res) => {
    experiences.updateExperience(
        req.params._id,
        req.body.position, 
        req.body.duration, 
        req.body.date,
        req.body.skills,
        req.body.language
    )
    .then(experience => {
        console.log(`"${experience.position}" was updated.`);
        res.json(experience);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error:  '400: Oops! The server could not update the experience. Try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/experiences/:_id', (req, res) => {
    experiences.deleteExperienceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} experience was deleted.`);
                res.status(200).send({ Success: '200: Your deletion request was succesful' });
            } else {
                res.status(404).json({ Error: '404: Oops! The server could not delete the experience by ID. Try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Oops! Your deletion request was unsuccseful. Try again' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});