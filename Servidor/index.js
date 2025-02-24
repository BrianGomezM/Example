const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectofinalportafolio'
});


app.post('/proyectos', (req, res) => {
    const { titulo, descripcion, imageUrl, link } = req.body;
    const query = `INSERT INTO proyectos (titulo, descripcion, imageUrl, link) VALUES (?, ?, ?, ?)`;
    db.query(query, [titulo, descripcion, imageUrl, link], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Proyecto registrado!!');
        }
    });
});


app.get('/proyectos', (req, res) => {
    const query = 'SELECT * FROM proyectos';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});


app.put('/proyectos/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, imageUrl, link } = req.body;
    const query = `UPDATE proyectos SET titulo = ?, descripcion = ?, imageUrl = ?, link = ? WHERE id = ?`;
    db.query(query, [titulo, descripcion, imageUrl, link, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send('Proyecto no encontrado');
        } else {
            res.status(200).send('Proyecto actualizado correctamente');
        }
    });
});


app.delete('/proyectos/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM proyectos WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send('Proyecto no encontrado');
        } else {
            res.status(200).send('Proyecto eliminado correctamente');
        }
    });
});


app.post('/contacto', (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    const query = `INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)`;
    
    db.query(query, [nombre, correo, mensaje], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Mensaje de contacto guardado correctamente!');
        }
    });
});



app.listen(3001, () => {
    console.log('Servidor en puerto 3001');
});
