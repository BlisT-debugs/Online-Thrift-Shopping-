const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'products.html'));
});

app.get('/diy', (req, res) => {
  res.sendFile(path.join(__dirname, 'diy.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
