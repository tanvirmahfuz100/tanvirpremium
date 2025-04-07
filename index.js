const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('TanvirPremium Server is LIVE! 🚀');
});

// Start server on Render's port
const PORT = process.env.PORT || 10000; // Render uses 10000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
