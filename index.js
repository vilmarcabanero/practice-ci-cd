const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Practice CI CD app is running.", update: "Update 1 - try gitlab ci for master on push"});
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
