const mongoose = require('mongoose');
const config = require('./config');
// const config = require('./config-old');
mongoose.Promise = global.Promise;

// const connectionURL = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

const connectionURL = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=admin`;

mongoose.connect( connectionURL, { useNewUrlParser: true })
    .catch( err => console.error( err ) );

const db = mongoose.connection;


db.on('connected', () => {
    console.log(`Mongoose connection in open on ${ connectionURL }`);
});

db.on('error', (err) => {
    console.error( err );
});

db.on('disconnected', () => {
    console.log(`Mongoose connection disconected`);
});

process.on('SIGINT', () => {
    db.close( () => {
        console.log('mongoose connection closed throw app termination');
        process.exit(0);
    });
})