const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  accounts: {
    usd: Number,
    euro: Number,
    ngn: Number,
  },
  transactions: [
    {
      sender: String,
      recipient: String,
      value: Number,
      currency: String,
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.models.Users || mongoose.model('Users', userSchema);
