const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Use bcryptjs instead of bcrypt

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

/*
// Ensure that any pre-save hooks for password hashing also use bcryptjs
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const saltRounds = 10;
    user.password = await bcryptjs.hash(user.password, saltRounds);
  }
  next();
});
*/

const User = mongoose.model('User', UserSchema);
module.exports = User;
