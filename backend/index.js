const express = require('express');
const app = express();
const port = 8080;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Grad-Deploy Backend!" });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});