/* codded by DEVANANDH _SER

*/

const { Sequelize } = require('sequelize');

const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// DEVANANDH _SER Special Functions

function convertToBool(text, fault = 'true') {

    return text === fault ? true : false;

}

module.exports = {

 DK: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,

 PHONE: process.env.NUMBER === undefined ? '+918129199375' : process.env.NUMBER,   

 OA_NAME: process.env.DEPLOYER === undefined ? 'Someone' : process.env.DEPLOYER,    

};
