// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">Mi Portafolio</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
