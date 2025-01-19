const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const validate = require('../middleware/validationMiddleware.js');
const {validateFournisseurs, validateFournisseursId} = require('../validators/fournisseursValidators.js')
const fournisseurRouter = Router()

fournisseurRouter.get('/fournisseurs', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.execute('SELECT * FROM fournisseur');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des fournisseurs :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

fournisseurRouter.post('/fournisseurs', validateFournisseurs, validate, async (req, res) => {
    try {
        const connection = await getConnection()
        const {nom} = req.body;
        const [result] = await connection.execute('INSERT INTO fournisseur(nom) VALUES (?)', [nom]);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'Fournisseur ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des fournisseur :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


fournisseurRouter.put('/fournisseurs/:id_fournisseur', validateFournisseursId.concat(validateFournisseurs), validate, async(req, res) => {
    try {
        const connection = await getConnection()
        const {nom} = req.body;
        const {id_fournisseur} = req.params;
        const [result] = await connection.execute('UPDATE fournisseur SET nom = ? WHERE id_fournisseur = ?', [nom, id_fournisseur]);
        await connection.end();
        res.status(200).json({
            message: 'Fournisseur mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

fournisseurRouter.delete('/fournisseurs/:id_fournisseur', validateFournisseursId, validate, async(req,res) => {
    try {
        const connection = await getConnection()
        const {id_fournisseur} = req.params;
        const [result] = await connection.execute('DELETE FROM fournisseur WHERE id_fournisseur = ?', [id_fournisseur]);
        await connection.end();
        res.status(200).json({
            message: 'Fournisseur supprimé avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = fournisseurRouter;