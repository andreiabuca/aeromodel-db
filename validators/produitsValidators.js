const {body, param} = require('express-validator');

const validateProduits = [
    body('nom').trim().notEmpty().withMessage('Nom est obligatoire').escape(),
    body('reference_produit').trim().notEmpty().withMessage('La référence produit est obligatoire').matches(/^[A-Za-z0-9]+$/).withMessage('La référence produit doit être alphanumérique'),
    body('prix_unitaire').isFloat().withMessage('prix_unitaire doit être un nombre'),
    body('quantite_stock').isFloat().withMessage('quantite_stock doit être un nombre'),
    body('id_categorie').isInt().withMessage('id_client doit être un entier')
];

const validateProduitsId = [
    param('id_produits').isInt().withMessage('Invalide produits ID')
];

module.exports = { validateProduits, validateProduitsId};