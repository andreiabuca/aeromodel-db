const express = require('express')
const{getConnection} = require('../db.js');
const {Router} = express; 
const validate = require('../middleware/validationMiddleware.js');
const {validateProduits, validateProduitsId} = require('../validators/produitsValidators.js')
const produitRouter = Router()

produitRouter.get('/produits', async (req, res) => {
    try {
        const connection = await getConnection()
        const [rows] = await connection.execute('SELECT * FROM produits');
        await connection.end();
        res.json(rows)
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})

produitRouter.post('/produits', validateProduits, validate, async (req, res) => {
    try {
        const connection = await getConnection()
        const {nom, reference_produit, prix_unitaire, quantite_stock, id_categorie} = req.body;
        const [result] = await connection.execute('INSERT INTO produits(nom, reference_produit, prix_unitaire, quantite_stock, id_categorie) VALUES (?, ?, ?, ?, ?)', [nom, reference_produit, prix_unitaire, quantite_stock, id_categorie]);
        await connection.end();
        res.status(201).json({
            id: result.insertId,
            message: 'Produit ajouté avec succès !'
        })
    } catch (error) {
        console.error("Erreur lors de l'ajout des produits :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
})


produitRouter.put('/produits/:id_produits', validateProduitsId.concat(validateProduits), validate, async(req, res) => {
    try {
        const connection = await getConnection()
        const {nom, reference_produit, prix_unitaire, quantite_stock, id_categorie} = req.body;
        const {id_produits} = req.params;
        const [result] = await connection.execute('UPDATE produits SET nom = ?, reference_produit = ?, prix_unitaire = ?, quantite_stock = ?, id_categorie = ? WHERE id_produits = ?', [nom, reference_produit, prix_unitaire, quantite_stock, id_categorie, id_produits]);
        await connection.end();
        res.status(200).json({
            message: 'Produit mise à jour avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

produitRouter.delete('/produits/:id_produits', validateProduitsId, validate, async(req,res) => {
    try {
        const connection = await getConnection()
        const {id_produits} = req.params;
        const [result] = await connection.execute('DELETE FROM produits WHERE id_produits = ?', [id_produits]);
        await connection.end();
        res.status(200).json({
            message: 'Produit supprimé avec succès !'
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = produitRouter;