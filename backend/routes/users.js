const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// Update user profile
router.put('/profile', auth, async (req, res) => {
    const { profile } = req.body;
    await User.findByIdAndUpdate(req.user.id, { profile });
    res.status(200).send('Profile updated');
});

module.exports = router;
