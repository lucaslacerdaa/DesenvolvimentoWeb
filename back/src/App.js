const routes = require('./router/router');
const express  = require('express');
const cors = require('cors');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

const port = 3333;
app.listen(port,() => console.log(`Server iniciado em "localhost:${port}"`));