const dotenv = require('dotenv').config();

const {
    db_host,
    db_port,
    db_name,
    db_user,
    db_password
} = dotenv.parsed;

module.exports = {
        "db": {
        "host": db_host,
        "port" : db_port,
        "name": db_name,
        "user": db_user,
        "password": db_password
    }
}