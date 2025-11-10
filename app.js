const express = require('express');
const cors = require('cors');
const alunosRouter = require('./route/alunosRoute');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/alunos', alunosRouter);

module.exports = app;