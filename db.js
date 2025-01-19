const mysql = require("mysql2/promise");
const fs = require("fs");
const express = require("express");
const cors = require("cors"); 
const dotenv = require("dotenv");

dotenv.config();


// Configuration de la base de données
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    multipleStatements: true,
};

async function getConnection() {
    return await mysql.createConnection(dbConfig)
}

module.exports = {getConnection};

