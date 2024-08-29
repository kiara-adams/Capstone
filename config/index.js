import { createPool } from "mysql2";
import 'dotenv/config'
let connection = createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
    multipleStatements: true,
    connectionLimit: 30,
})
connection.on('connection', (pool) => {
    if (!pool) throw new Error('Couldn\'t connect to the database, please try again later')
})
export {
    connection
}
