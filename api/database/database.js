const mongoose = require('mongoose');
const path = require('path');
const relative_path = path.join(__dirname, '../', '/.env');

require('dotenv').config({path: relative_path});
const database = () => {
    return mongoose.connect(process.env.URI, 
        {useNewUrlParser: true, useUnifiedTopology: true}
        ).then(() => console.log("MongoDB is connected"))
        .catch(err => console.log(err.message));
}

module.exports = database;