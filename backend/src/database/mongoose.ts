/* handeling the connection with the MongoDB database */
const mongoose = require('mongoose');

const connectionUrl = ('mongodb+srv://" + process.env.DB_USER_PASS +@cluster0.bru98.mongodb.net/lists');

mongoose.connect(connectionUrl, {useNewParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB'))
    .catch((err:any) => console.log('failed to connect to MongoDB', err));

module.exports = {
    mongoose
};