const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    field: String,
    experience: Number,
    clinics: [String]
});

module.exports = mongoose.model('Expert', ExpertSchema);
