const express = require('express');

const app = express();
const port = 3000;
const path = '/express-nodejs' || process.env.PATH;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get(path, (req, res) => {
  res.send('Also, Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} for path ${path}`);
});
