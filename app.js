const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You are my fave dad! I love love love love love love love love love love love love love love love love love love love love love love love love love love love love love you'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
