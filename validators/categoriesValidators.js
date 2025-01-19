const {body, param} = require('express-validator');

const validateCategories = [
    body('nom').trim().notEmpty().withMessage('Nom est obligatoire').escape(),
];

const validateCategoriesId = [
    param('id').isInt().withMessage('Invalide categories ID')
];

module.exports = { validateCategories, validateCategoriesId};