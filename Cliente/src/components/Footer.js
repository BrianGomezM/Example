import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'; 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="about-github">
                    <h2>¿Qué es GitHub y para qué se usa?</h2>
                    <p>
                        GitHub es una plataforma de desarrollo colaborativo que se utiliza
                        para alojar y gestionar proyectos de programación. Permite a los
                        desarrolladores trabajar juntos en el mismo proyecto mediante el
                        uso de sistemas de control de versiones como Git.
                    </p>
                    <p>
                        Es ideal para llevar un registro detallado de los cambios en el
                        código, colaborar con otros programadores, revisar propuestas de mejoras,
                        y hasta automatizar procesos de desarrollo. GitHub también es muy popular
                        en los proyectos de código abierto.
                    </p>
                </div>
            <div className="social-icons">
                    <a href="https://gomezdevportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                        <FaGlobe size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/brayan-julio-g%C3%B3mez-mu%C3%B1oz-b195b818b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/BrianGomezM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>

                <p>
                    Un evento clave de la Segunda Guerra Mundial fue el desembarco de Normandía, llevado a cabo el 6 de
                    junio de 1944 y conocido como el Día D. Este fue un asalto masivo por parte de las fuerzas aliadas
                    en las playas de Normandía, Francia, con el objetivo de liberar Europa occidental del dominio nazi.
                    La operación combinó fuerzas aéreas, marítimas y terrestres, involucrando a miles de soldados de
                    diversas naciones, y marcó un punto de inflexión significativo en la guerra, abriendo el camino para
                    la derrota de la Alemania nazi en 1945.
                </p>
            </div>
            </div>
            <p className="footer-copy">© 2024 Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
