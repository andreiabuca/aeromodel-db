const { getConnection } = require('../db.js');

const checkStock = async (id_produits, quantite) => {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT quantite_stock FROM Produits WHERE id_produits = ?', [id_produits]);
    if (rows.length === 0) {
        await connection.end();
        throw new Error('Product not found');
    }
    const stock = rows[0].quantite_stock;
    if (stock < quantite) {
        await connection.end();
        throw new Error('Insufficient stock');
    }
    await connection.end();
    return true;
};

const updateStock = async (id_produits, quantite, operation) => {
    const connection = await getConnection();
    let query = '';
    if (operation === 'reduce') {
        query = 'UPDATE Produits SET quantite_stock = quantite_stock - ? WHERE id_produits = ?';
    } else if (operation === 'increase') {
        query = 'UPDATE Produits SET quantite_stock = quantite_stock + ? WHERE id_produits = ?';
    }
    await connection.execute(query, [quantite, id_produits]);
    await connection.end();
};

module.exports = {checkStock, updateStock};