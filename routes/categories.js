const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const categorieRouter = Router()

categorieRouter.get('/categories', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.query('SELECT * FROM categories');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des categories :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

categorieRouter.post('/categories', async (req, res) => {
    try {
        const connection = await getConnection()
        const {nom} = req.body;
        const [result] = await connection.query(`INSERT INTO categories(nom) VALUES '${nom}'`);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'Categorie ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des categories :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


categorieRouter.put('/categories/:id', async(req, res) => {
    try {
        const connection = await getConnection()
        const {nom} = req.body;
        const {id} = req.params;
        const [result] = await connection.query(`UPDATE categories SET nom = '${nom}' WHERE id = '${id}'`);
        await connection.end();
        res.status(200).json({
            message: 'Categories mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

categorieRouter.delete('/categories/:id', async(req,res) => {
    try {
        const connection = await getConnection()
        const {id} = req.params;
        const [result] = await connection.query(`DELETE FROM categories WHERE id = '${id}'`);
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


module.exports = categorieRouter;