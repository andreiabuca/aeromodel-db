//file pour gerer l'app
const express = require('express')
const bodyParser = require('body-parser')
const categorieRouter = require('./routes/categories.js');
const clientRouter = require('./routes/clients.js');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(categorieRouter);
app.use(clientRouter);

app.listen(port, () => {
    console.log(`Serveur API en cours d'exécution sur http://localhost:${port}`);
});
