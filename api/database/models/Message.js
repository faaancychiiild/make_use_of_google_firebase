const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    body: String,
    sentBy: String,
    receivedBy: String,
    timeStamp: Date
});
module.exports = mongoose.model('Message', messageSchema);