const express = require('express');
const app = express();

// Add this route 👇
app.get('/', (req, res) => {
  res.send('TanvirPremium Server is LIVE! 🚀');
});

// Keep your existing code for /get-cookies here...

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
