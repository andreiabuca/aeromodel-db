const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const commandeRouter = Router()

commandeRouter.get('/commandes', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.query('SELECT * FROM commandes');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

commandeRouter.get('/commandes/lignes', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.query('SELECT c.id_commandes, c.date_time, c.prix_total, lc.id AS ligne_id, lc.id_produits, lc.quantite, p.nom AS produit_nom, p.reference_produit, p.prix_unitaire FROM commandes c LEFT JOIN lignes_commande lc ON c.id_commandes = lc.id_commandes LEFT JOIN produits p ON lc.id_produits = p.id_produits');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

commandeRouter.post('/commandes', async (req, res) => {
    try {
        const connection = await getConnection()
        const {id_client, date_time, prix_total} = req.body;
        const [result] = await connection.query('INSERT INTO commandes(id_client, date_time, prix_total) VALUES (?, ?, ?)', [id_client, date_time, prix_total]);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'Commande ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des commandes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


commandeRouter.put('/commandes/:id_commandes', async(req, res) => {
    try {
        const connection = await getConnection()
        const {id_client, date_time, prix_total} = req.body;
        const {id_commandes} = req.params;
        const [result] = await connection.query("UPDATE commandes SET id_client = ?, date_time = ?, prix_total = ? WHERE id_commandes = ?", [id_client, date_time, prix_total, id_commandes]);
        await connection.end();
        res.status(200).json({
            message: 'Commande mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

commandeRouter.delete('/commandes/:id_commandes', async(req,res) => {
    try {
        const connection = await getConnection()
        const {id_commandes} = req.params;
        const [result] = await connection.query("DELETE FROM commandes WHERE id_commandes = ?", [id_commandes]);
        await connection.end();
        res.status(200).json({
            message: 'Commande supprimé avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = commandeRouter;