const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Replace with the correct path to your User model

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}); 
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching users' });
    }
});

module.exports = router;
