const mongoose = require('mongoose');
const URL = process.env.URL_MONGO;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const mongo = mongoose.connection

mongo.on('error', () => console.log('Error en la conexion ❌'))
mongo.once('open', () => console.log('Conectacto a MongoDB ✅'))
