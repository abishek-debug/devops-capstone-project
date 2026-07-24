const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>DevOps Capstone Project</h1>
    <p>Node.js app running successfully!</p>
    <p>Hostname: ${require('os').hostname()}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
