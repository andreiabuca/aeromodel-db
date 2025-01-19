const {body, param} = require('express-validator');

const validateCommandes = [
    body('id_client').isInt().withMessage('id_client doit être un entier'),
    body('date_time').isISO8601().withMessage('date_time doit être une date valide'),
    body('prix_total').isFloat({min: 0}).withMessage('prix_total doit être un nombre'),
    body('id_produits').isInt().withMessage('id_produits doit être un entier'),
    body('quantite').isInt({ min: 1 }).withMessage('quantite doit être un entier positive')
];

const validateCommandesId = [
    param('id_commandes').isInt().withMessage('Invalide commandes ID')
];

module.exports = { validateCommandes, validateCommandesId};