const express = require('express');
const bcryptjs = require('bcryptjs'); // Ensure bcryptjs is imported
const router = express.Router();

router.get('/test', async (req, res) => {
  const plainPassword = 'password123';
  const saltRounds = 10;

  try {
    // Manual Hash
    const hashedPassword = await bcryptjs.hash(plainPassword, saltRounds);
    console.log('Manual Hashed Password:', hashedPassword);

    // Manual Compare
    const isMatch = await bcryptjs.compare(plainPassword, hashedPassword);
    console.log('Manual Password Match:', isMatch);

    res.json({ hashedPassword, isMatch });
  } catch (error) {
    console.error('Error during manual hash and compare:', error);
    res.status(500).json({ message: 'Server error during manual hash and compare' });
  }
});

module.exports = router;
