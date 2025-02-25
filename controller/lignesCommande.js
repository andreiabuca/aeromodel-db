const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const validate = require('../middleware/validationMiddleware.js');
const {validateLignesCommandes, validateLignesCommandesId} = require('../validators/lignesCommandesValidators.js')
const lignesCommandeRouter = Router()

lignesCommandeRouter.get('/lignesCommande', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.execute('SELECT * FROM lignes_commande');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des lignesCommandes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

lignesCommandeRouter.post('/lignesCommande', validateLignesCommandes, validate, async (req, res) => {
    try {
        const connection = await getConnection()
        const {id_produits, id_commandes, quantite} = req.body;
        const [result] = await connection.execute('INSERT INTO lignes_commande(id_produits, id_commandes, quantite) VALUES (?, ?, ?)', [id_produits, id_commandes, quantite]);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'lignesCommande ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des lignesCommandes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


lignesCommandeRouter.put('/lignesCommande/:id', validateLignesCommandesId.concat(validateLignesCommandes), validate, async(req, res) => {
    try {
        const connection = await getConnection()
        const {id_produits, id_commandes, quantite} = req.body;
        const {id} = req.params;
        const [result] = await connection.execute('UPDATE lignes_commande SET id_produits = ?, id_commandes = ?, quantite = ? WHERE id = ?', [id_produits, id_commandes, quantite, id]);
        await connection.end();
        res.status(200).json({
            message: 'lignesCommande mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

lignesCommandeRouter.delete('/lignesCommande/:id', validateLignesCommandesId, validate, async(req,res) => {
    try {
        const connection = await getConnection()
        const {id} = req.params;
        const [result] = await connection.execute('DELETE FROM lignes_commande WHERE id = ?', [id]);
        await connection.end();
        res.status(200).json({
            message: 'lignesCommande supprimé avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = lignesCommandeRouter;