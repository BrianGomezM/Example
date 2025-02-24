import React from 'react';
import './Perfil.css'; 

const Perfil = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <img
            src="https://github.com/BrianGomezM/BrianGomezM/blob/main/hi2.gif?raw=true"
            alt="Perfil"
            className="rounded-circle mb-3"
            style={{ width: '250px', height: '250px' }}
          />
          <h2>Hi! 👨‍💻 I'm Brayan J. Gomez M!</h2>
          <p className="text-muted">
            My professional profile focuses on application development, database integration, and implementation of agile methodologies to optimize the development process.
          </p>
          <hr />
          <p className="text-muted">A passionate Full-Stack Web Developer</p>
          <h6>About Me:</h6>
          <ul className="list-unstyled">
            <li>💪🏻 Working on deepening my knowledge in many areas of my career.</li>
            <li>💻 Most used line of code: <code>console.log("hello world")</code></li>
            <li>👨‍💻 Always eager to learn new technologies and skills.</li>
            <li>📫 How to reach me: LinkedIn or Email</li>
            <li>🐶 Fun fact: World first developer was a woman</li>
          </ul>        
        </div>
      </div>
    </div>
  );
};

export default Perfil;
