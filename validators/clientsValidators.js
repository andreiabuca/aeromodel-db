const {body, param} = require('express-validator');

const validateClient = [
    body('nom').trim().notEmpty().withMessage('Nom est obligatoire').escape(),
    body('adress').trim().notEmpty().withMessage('Adress est obligatoire').escape(),
    body('email').isEmail().withMessage('Invalide email format').normalizeEmail(),
    body('telephone').trim().notEmpty().withMessage('Telephone est obligatoire').escape().isLength({max:10}).withMessage('Le numéro de téléphone ne doit pas dépasser 10 chiffres').matches(/^\d+$/).withMessage('Le téléphone doit contenir uniquement des chiffres').escape()
];

const validateClientId = [
    param('id_client').isInt().withMessage('Invalide client ID')
];

module.exports = { validateClient, validateClientId};