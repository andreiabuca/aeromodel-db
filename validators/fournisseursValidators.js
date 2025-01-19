const {body, param} = require('express-validator');

const validateFournisseurs = [
    body('nom').trim().notEmpty().withMessage('Nom est obligatoire').escape(),
];

const validateFournisseursId = [
    param('id_fournisseur').isInt().withMessage('Invalide fournisseur ID')
];

module.exports = { validateFournisseurs, validateFournisseursId};