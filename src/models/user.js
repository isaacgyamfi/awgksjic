const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  membershipNumber: {
    type: String,
    required: true,
  },
  membershipType: {
    type: String,
    enum: ['commandery', 'auxiliary'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
