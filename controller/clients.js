const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const validate = require('../middleware/validationMiddleware.js');
const {validateClient, validateClientId} = require('../validators/clientsValidators.js')
const clientRouter = Router()

clientRouter.get('/clients', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.execute('SELECT * FROM clients');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

clientRouter.get('/clients/commandes', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.execute('SELECT cl.id_client, cl.nom AS client_nom, cl.adress, cl.email, cl.telephone, co.id_commandes, co.date_time, co.prix_total FROM clients cl LEFT JOIN commandes co ON cl.id_client = co.id_client');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

clientRouter.post('/clients', validateClient, validate, async (req, res) => {
    try {
        const connection = await getConnection()
        const {nom, adress, email, telephone} = req.body;
        const [result] = await connection.execute('INSERT INTO clients(nom, adress, email, telephone) VALUES (?, ?, ?, ?)', [nom, adress, email, telephone]);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'Client ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des clients :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


clientRouter.put('/clients/:id_client', validateClientId.concat(validateClient), validate, async(req, res) => {
    try {
        const connection = await getConnection()
        const {nom, adress, email, telephone} = req.body;
        const {id_client} = req.params;
        const [result] = await connection.execute('UPDATE clients SET nom = ?, adress = ?, email = ?, telephone = ? WHERE id_client = ?', [nom, adress, email, telephone, id_client]);
        await connection.end();
        res.status(200).json({
            message: 'Client mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

clientRouter.delete('/clients/:id_client', validateClientId, validate, async(req,res) => {
    try {
        const connection = await getConnection()
        const {id_client} = req.params;
        const [result] = await connection.execute('DELETE FROM clients WHERE id_client = ?', [id_client]);
        await connection.end();
        res.status(200).json({
            message: 'Categories supprimé avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = clientRouter;