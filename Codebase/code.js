// THIS WORKS
const mysql = require('mysql2');
const readline = require('readline');
const express = require('express');
const appl = express();

function startServer() {

}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Anu_Rad_0853',
  database: 'DASS_Project'
};

rl.question('Enter your MySQL username: ', (username) => {
  
  rl.question('Enter your MySQL password: ', (password) => {
    
    const pool = mysql.createPool(dbConfig);
    module.exports = pool.promise();

    rl.close();

    // Start the server
    startServer();
  });
});


const pool = mysql.createPool(dbConfig);

// // Export the pool promise for use in other files
module.exports = pool.promise();
