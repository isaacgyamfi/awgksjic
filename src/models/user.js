const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    registrationId: String,
    email: String,
    userType: {
      type: String,
      enum: ['COMMANDERY', 'AUXILIARY'],
    },
    registrationStatus: {
      type: String,
      enum: ['REGISTERED', 'PENDING_APPROVAL', 'REJECTED'],
      default: 'PENDING_APPROVAL',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
