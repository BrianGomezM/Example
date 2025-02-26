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

                        <p>
                            La Segunda Guerra Mundial fue un conflicto global que se libró entre 1939 y 1945,
                            involucrando a las principales potencias mundiales y dejando una profunda huella en la
                            historia de la humanidad.
                        </p>
                        <p>
                            <p>
                                La Segunda Guerra Mundial, que tuvo lugar entre 1939 y 1945, fue uno de los conflictos
                                más devastadores de la historia, marcada por la lucha entre los Aliados y las Potencias
                                del Eje, dejando un impacto profundo en la política y sociedad mundial.
                            </p>
                        </p>

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
