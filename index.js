//file pour gerer l'app
const express = require('express')
const bodyParser = require('body-parser')
const categorieRouter = require('./routes/categories.js');
const clientRouter = require('./routes/clients.js');
const commandesRouter = require('./routes/commandes.js');
const fournisseurRouter = require('./routes/fournisseur.js');
const produitRouter = require('./routes/produits.js');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(categorieRouter);
app.use(clientRouter);
app.use(commandesRouter);
app.use(fournisseurRouter);
app.use(produitRouter);

app.listen(port, () => {
    console.log(`Serveur API en cours d'exécution sur http://localhost:${port}`);
});
