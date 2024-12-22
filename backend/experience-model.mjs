// Models for the Experience Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500: Oops! The connection to the server has failed. Try again.' });
    } else  {
        console.log('Success: Yay! You have succesfully connected to the Experience Collection through Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const experienceSchema = mongoose.Schema({
	position:    { type: String, required: true },
	duration:     { type: Number, required: true },
    date:  { type: Date, required: true, default: Date.now},
	skills: { type: String, required: true },
    language: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "experiences".
const experiences = mongoose.model('Experiences', experienceSchema);


// CREATE model *****************************************
const createExperience = async (position, duration, date, skills, language) => {
    const experience = new experiences({ 
        position: position, 
        duration: duration, 
        date: date,
        skills: skills,
        language: language
    });
    return experience.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveExperiences = async () => {
    const query = experiences.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveExperienceByID = async (_id) => {
    const query = experiences.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteExperienceById = async (_id) => {
    const result = await experiences.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateExperience = async (_id, position, duration, date, skills, language) => {
    const result = await experiences.replaceOne({_id: _id }, {
        position: position,
        duration: duration,
        date: date,
        skills: skills,
        language: language
    });
    return { 
        _id: _id, 
        position: position,
        duration: duration,
        date: date,
        skills: skills,
        language: language
    }
}

// EXPORT the variables for use in the controller file.
export { createExperience, retrieveExperiences, retrieveExperienceByID, updateExperience, deleteExperienceById }