import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, correo, mensaje }),
        });

        if (response.ok) {
            alert('Mensaje enviado con éxito!');
            setNombre('');
            setCorreo('');
            setMensaje('');
        } else {
            alert('Error al enviar el mensaje. Intenta nuevamente. Cabmbios de prueba');
        }
    };



    return (
        <section id="contacto" className="container my-5">
            <h1 className="text-center">Esto es una prueba de IA</h1>
            <h1 className="text-center">Esto es una prueba de IA</h1>
            <h2 className="text-center">Contáctenos - prueba</h2>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                placeholder="Tu nombre largo"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="correo"
                                placeholder="Tu correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                rows="4"
                                placeholder="Tu mensaje"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
