const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  id: String,
  active: Boolean
});
module.exports = mongoose.model('User', userSchema);