const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const clientRouter = Router()

clientRouter.get('/clients', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.query('SELECT * FROM clients');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

clientRouter.post('/clients', async (req, res) => {
    try {
        const connection = await getConnection()
        const {nom, adress, email, telephone} = req.body;
        const [result] = await connection.query('INSERT INTO clients(nom, adress, email, telephone) VALUES (?, ?, ?, ?)', [nom, adress, email, telephone]);
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


clientRouter.put('/clients/:id_client', async(req, res) => {
    try {
        const connection = await getConnection()
        const {nom, adress, email, telephone} = req.body;
        const {id_client} = req.params;
        const [result] = await connection.query("UPDATE clients SET nom = ?, adress = ?, email = ?, telephone = ? WHERE id_client = ?", [nom, adress, email, telephone, id_client]);
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

clientRouter.delete('/clients/:id_client', async(req,res) => {
    try {
        const connection = await getConnection()
        const {id_client} = req.params;
        const [result] = await connection.query("DELETE FROM clients WHERE id_client = ?", [id_client]);
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