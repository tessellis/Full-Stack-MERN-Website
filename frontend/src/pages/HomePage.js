import React from 'react';
import { RiCollageFill, RiBriefcase4Fill, RiMouseFill, RiChatSmile2Fill } from "react-icons/ri";


function Homepage() {
    return (
    <>

<h2>Web Dev: Final Project</h2>
<nav class="local-nav">
<a href="#about">About</a>
<a href="#careerGoals">Career Goals</a>
<a href="#tech">Technologies Used</a>
<a href="#thanks">Acknowledgements</a>
</nav>

<article>
    <h3 id="about">
        <RiCollageFill className="heading-icon" /> 
        About This Website
    </h3> 
    <p>
        Welcome to my Final Project! This website is the result of three months of persistent learning, practice, failure, and finally, success! It is designed to serve as a portfolio-like page with professional experiences and a gallery of personal photography. I hope you enjoy your visit to my website!
    </p>
</article>
<article>
    <h3 id="careerGoals">
        <RiBriefcase4Fill className="heading-icon" /> 
        Career Goals
    </h3> 
    <p>
        I discovered my interest for CS in my Freshman year at OSU, so I am still enjoying the process of exploring different subfields and career path options. Through my exploration, I have discovered that I greatly enjoy having a more visible result when programming. Web development was a wonderful introduction to the more visual side of CS, so I am very happy to have taken a Web Dev course. As I continue on my CS path, I plan to explore multiple fields before selecting a focus, but I am sure I will take my interest in visual programming in mind when making my selection. In the future, I hope to find myself in a career that requires me to continually learn and improve my CS skills, and that allows me to explore multiple subfields on a daily basis.   
    </p>    
</article>
<article>
    <h3 id="tech">
        <RiMouseFill className="heading-icon" /> 
        Technologies Used
    </h3>
    <p>
        This website incorporates various technologies and a React framework to offer the user the best experience while also allowing the developer to have a highly organized work-space. It also utilizes multiple programming languages to achieve a straight-forward web development process. The technologies and programming languages used in this website include:
    </p>
    <p>
        <dl>
        <dt>
            <strong>CSS</strong>
            </dt>
        <dd>
            As its name suggests, CSS applies style rules using a “cascading” method; making it highly convenient for visually complex web pages. Instead of having to declare styling for all classes and objects, CSS allows us to easily inherit styling features. CSS is a good tool for large projects that could benefit from easily inheritable formats and styles. This website focuses on a vibrant but organized style.
        </dd>
        <dt>
            <strong>HTML</strong>
        </dt>
        <dd>
            HyperText Markup Language, HTML, is used to structure web pages. For example, the text you are now reading is in a “dd” tag, which structures the text in a list. Above, the HTML title is in a “dt” tag, which has bolder styling and color defined in the website's CSS file. Both of these are (and all other text/titles) are in a body block; the cream-colored box holding all text. Learning HTML allows us to achieve a deeper understanding of how websites are internally structured and how they are visually organized. 
        </dd>
        <dt>
            <strong>JavaScript</strong>
        </dt>
        <dd>
            Unlike other programming languages, JavaScript (JS) does not need to be compiled before being executed, allowing developers to easily and quickly update, delete, and add content to their web projects. Node.js (see more below) and HTML are typically used together for data-intensive websites and applications. JS is a third-generation programming language, meaning that it is very similar to human language, and supports DOM manipulation and asynchronous programming (see more below). You are currently on HomePage.js (JavaScript file)!
        </dd>
        <dt>
            <strong>DOM Manipulation</strong>
        </dt>
        <dd>
            The Document Object Model (DOM) is a programming interface that represents HTML documents as a tree (or collection) of Nodes. HTML elements  include “h1” tags and “p” tags, text nodes include the text within elements, and comment nodes represent comment within the HTML file. In this website, DOM manipulation is used to create, edit, and remove items from an experience collection, but there are many unique ways to use DOM manipulation; including form validation, sliders, menus, user interaction, and more!
        </dd>
        <dt>
            <strong>Asynchronous Programming</strong>
        </dt>
        <dd>
        Asynchronous programming allows tasks to be executed independently, meaning the program will continue running efficiently while executing tasks. This helps us avoids operation blocking, meaning a smoother experience for both the user and the developer. 
        </dd>
        <dt>
            <strong>Node.js</strong>
        </dt>
        <dd>
            Node.js is an open-source runtime environment that supports JS use outside of web browsers. This runtime environment offers faster code executions, supports asynchronous programming, and can handle a large number of simultaneous connections. 
        </dd>
        <dt>
            <strong>Express</strong>
        </dt>
        <dd>
            Express is a web application framework that is built on Node.js. It provides a large array of features for web development, including routing maps, static files (CSS files, images, etc.), and middleware support. Express is used in the backend of this website to start the server on a local port, for routing pages, error handling, and for serving static files.
        </dd>
        </dl>
    </p>
</article>
<article>
    <h3 id="thanks">
        <RiChatSmile2Fill className="heading-icon" /> 
        A Thank-You Note</h3> 
    <p>
        This has been, by far, one of my favorite courses at OSU! I would like to give the sincerest of thank yous to the instructors and TA's for making this course so great! For this final project, I was able to spend a lot of time playing with CSS and page layout formats. Although this is only the beginning of my CS and web dev journey, it's the first time I've been able to actually feel proud of something I have created! I feel very fortunate to have taken the class. Thank you! 
    </p>
</article>
</>
    );
}

export default Homepage;
