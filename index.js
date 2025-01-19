//file pour gerer l'app
const express = require('express')
const bodyParser = require('body-parser')
const categorieRouter = require('./controller/categories.js');
const clientRouter = require('./controller/clients.js');
const commandesRouter = require('./controller/commandes.js');
const fournisseurRouter = require('./controller/fournisseurs.js');
const produitRouter = require('./controller/produits.js');
const lignesCommandeRouter = require('./controller/lignesCommande.js');

const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(categorieRouter);
app.use(clientRouter);
app.use(commandesRouter);
app.use(fournisseurRouter);
app.use(produitRouter);
app.use(lignesCommandeRouter);

app.listen(port, () => {
    console.log(`Serveur API en cours d'exécution sur http://localhost:${port}`);
});
