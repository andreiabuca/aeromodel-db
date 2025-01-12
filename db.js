const mysql = require("mysql2/promise");
const fs = require("fs");
const express = require("express");
const cors = require("cors"); 


// Configuration de la base de données
const dbConfig = {
    host: "localhost",
    user: "root",
    multipleStatements: true,
    password: "0310Larry",
    database: "Aeromodel",
    port: 3306,
};

async function getConnection() {
    return await mysql.createConnection(dbConfig)
}

module.exports = {getConnection};

