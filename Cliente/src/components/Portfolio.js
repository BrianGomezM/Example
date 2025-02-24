import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [newProject, setNewProject] = useState({ titulo: '', descripcion: '', imageUrl: '', link: '' });
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    const loadProjects = async () => {
        try {
            const response = await axios.get('http://localhost:3001/proyectos');
            console.log('Proyectos cargados:', response.data);
            setProjects(response.data);
        } catch (error) {
            console.error('Error al cargar proyectos:', error);
        }
    };

    useEffect(() => {
        loadProjects(); 
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingProject) {
            handleUpdate();
        } else {
            try {
                await axios.post('http://localhost:3001/proyectos', newProject);
                setShowModal(false);
                setNewProject({ titulo: '', descripcion: '', imageUrl: '', link: '' });
                loadProjects(); 
            } catch (error) {
                console.error('Error al registrar el proyecto:', error);
            }
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/proyectos/${editingProject.id}`, newProject);
            setShowModal(false);
            setNewProject({ titulo: '', descripcion: '', imageUrl: '', link: '' });
            setEditingProject(null); 
            loadProjects();
        } catch (error) {
            console.error('Error al actualizar el proyecto:', error);
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setNewProject(project);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/proyectos/${id}`);
            loadProjects();
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
        }
    };

    const filteredProjects = projects.filter(project =>
        project.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="portfolio" className="container my-5">
            <h2 className="text-center">Mis Proyectos</h2>
            <div style={{ padding: '20px 0' }}>
                <Button variant="primary" onClick={() => {
                    setShowModal(true);
                    setEditingProject(null);
                    setNewProject({ titulo: '', descripcion: '', imageUrl: '', link: '' });
                }}>
                    {editingProject ? 'Editar proyecto' : 'Registrar nuevo proyecto'}
                </Button>
            </div>
            <div style={{ padding: '10px 0' }}>
                <Form.Control
                    type="text"
                    placeholder="Buscar por título o descripción"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {filteredProjects.map((project) => (
                        <Col key={project.id}>
                            <Project
                                {...project}
                                onEdit={() => handleEdit(project)}  
                                onDelete={() => handleDelete(project.id)}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProject ? 'Editar Proyecto' : 'Registrar Proyecto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={newProject.titulo}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descripcion"
                                value={newProject.descripcion}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label>URL de la Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                name="imageUrl"
                                value={newProject.imageUrl}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLink">
                            <Form.Label>Enlace</Form.Label>
                            <Form.Control
                                type="text"
                                name="link"
                                value={newProject.link}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {editingProject ? 'Actualizar' : 'Registrar'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Portfolio;
