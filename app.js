const express = require('express');
const cors = require('cors');
const alunosRouter = require('./routes/alunosRoutes');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/alunos', alunosRouter);

module.exports = app;