const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  adminPhone: {
    type: String,
    required: true,
  },
  membershipId: {
    type: String,
    required: true,
  },
  membershipType: {
    type: String,
    enum: ['commandery', 'auxiliary'],
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
