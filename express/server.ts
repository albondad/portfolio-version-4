const express = require('express');
const application = express();
const port =  process.env.PORT || 8000;
const path = require('path');

application.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bundle.js'))
});

application.get('/resume.pdf', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/resume.pdf`))
});

application.get('/images/:id', (req, res) => {
    const name = req.params.id;
    res.sendFile(path.join(__dirname, `../public/images/${name}`))
});

application.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

application.listen(port)