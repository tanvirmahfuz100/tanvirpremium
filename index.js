const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('TanvirPremium Server is LIVE! 🚀');
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
