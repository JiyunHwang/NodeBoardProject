import mySql from 'mysql';
import dotenv from 'dotenv';
import config from './config.js';

// bring environment variables
dotenv.config();

// create connection to db
const connection = mySql.createConnection(config['development']);
connection.connect((err) => {
    if(err) throw err;
});

export default connection;