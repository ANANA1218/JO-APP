import mysql from 'mysql2'

const db_connection = async() => {

    // recup des informations qui sont dans le ficher .env 
    const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD} = process.env
    return mysql.createPool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
        namedPlaceholders:true

    })
}