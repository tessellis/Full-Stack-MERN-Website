// app.js
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Use port from .env or default to 8001
const PORT = process.env.REACT_FRONTEND_PORT || 8001;

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server running at http://<YOUR-SERVER-DOMAIN-OR-IP>:${PORT}`);
});