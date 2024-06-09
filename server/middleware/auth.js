// middleware/auth.js

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'No token, authorization denied' });

  const token = authHeader.replace('Bearer ', '');
  console.log('Token received:', token); // Debug log

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log('Token verified:', decoded); // Debug log
    next();
  } catch (err) {
    console.log('Token verification error:', err); // Debug log
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
