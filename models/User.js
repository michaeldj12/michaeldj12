const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
  phone: String,
  address: String,
  licenseType: String,
  schoolId: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  language: { type: String, default: 'en' }
});

module.exports = mongoose.model('User', userSchema);