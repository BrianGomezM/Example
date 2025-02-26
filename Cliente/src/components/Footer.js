import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'; 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Desarrollado por:</h3>
                <p> ING Brayan Julio Gomez Muñoz</p>
                <div className="social-icons">
                    <a href="https://gomezdevportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                        <FaGlobe size={24} />
                    </a>
                    <p>
                        La Segunda Guerra Mundial (1939-1945) fue uno de los conflictos más devastadores del siglo XX,
                        redefiniendo alianzas políticas y cambiando el curso de la humanidad.
                    </p>
                    <a href="https://www.linkedin.com/in/brayan-julio-g%C3%B3mez-mu%C3%B1oz-b195b818b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/BrianGomezM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
            <p className="footer-copy">© 2024 Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
