import dotenv from 'dotenv';

dotenv.config();

const config = {
    development : {
        host: '127.0.0.1',
        poart: 3306,
        user: 'root',
        password: process.env.DATABASE_SPRINT_PASSWORD,
        database: 'node_board'
    }
};

export default config;