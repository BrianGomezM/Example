import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Project.css';

const Project = ({ id, titulo, descripcion, imageUrl, link, onEdit, onDelete }) => {
    return (
        <Card className="h-100 d-flex flex-column">
            <Card.Img variant="top" src={imageUrl} alt={titulo} className="card-img-custom" />
            <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title className="card-title">{titulo}</Card.Title>
                <Card.Text className="card-text">{descripcion}</Card.Text>
            </Card.Body>
            <div className="card-buttons mt-auto d-flex justify-content-around p-3">
                <Link to={link} className="btn btn-primary">Ver</Link>
                <Button variant="danger" onClick={() => onDelete(id)}>Eliminar</Button>
                <Button variant="warning" onClick={onEdit}>Editar</Button>
            </div>
        </Card>
    );
};

export default Project;
