const express = require('express');
const router = express.Router();
const Expert = require('../models/Expert');
const auth = require('../middleware/auth');

// Create or update expert details
router.post('/', auth, async (req, res) => {
    const { field, experience, clinics } = req.body;
    await Expert.findOneAndUpdate({ userId: req.user.id }, { field, experience, clinics }, { upsert: true });
    res.status(200).send('Expert details saved');
});

module.exports = router;
