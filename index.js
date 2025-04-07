require('./errorHandler'); // Add this line

const express = require('express');
const app = express();

// Critical for Render hosting
app.enable('trust proxy'); // Add this line
app.use(express.json()); // Add this line

// Root route
app.get('/', (req, res) => {
  console.log('Root route hit!'); // For debugging
  res.send('TanvirPremium Server is LIVE! 🚀');
});

// Wildcard route (safety net)
app.get('*', (req, res) => {
  res.status(404).send('Route not found');
});

// Server setup
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
