const {body, param} = require('express-validator');

const validateLignesCommandes = [
    body('id_produits').isInt().withMessage('id_produits doit être un entier'),
    body('id_commandes').isInt().withMessage('id_commandes doit être un entier'),
    body('quantite').isFloat().withMessage('prix_total doit être un nombre')
];

const validateLignesCommandesId = [
    param('id').isInt().withMessage('Invalide lignes_commandes ID')
];

module.exports = { validateLignesCommandes, validateLignesCommandesId};