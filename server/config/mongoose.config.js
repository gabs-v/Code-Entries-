// this is the file where we use mongoose to connect to MongoDB

const mongoose = require ('mongoose');

const dbName = 'codeDiary'

mongoose
.connect('mongodb://localhost/diary',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a connection with ${dbName}`))
.catch((err) => console.log(err))