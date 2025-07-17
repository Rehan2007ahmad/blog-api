const express = require('express');
const app = express();

app.use((req, res) => {
  res.status(404).send("Not Found");
});
app.listen(3000, () => {
  console.log('Server running on 3000');
});
