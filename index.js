const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //heroku assigns port for you, or on local default to 3000

app.use(express.static('www'));

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log("App listening on port ", PORT));

