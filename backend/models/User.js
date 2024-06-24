const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['user', 'expert'], default: 'user' },
    profile: {
        preferences: [String],
        mentalHealthNeeds: String,
    }
});

module.exports = mongoose.model('User', UserSchema);
