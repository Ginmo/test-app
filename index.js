const express = require('express');
const json = require('express-json');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(json());

app.get('/api/test', (req, res) => {
    res.status(200).send("TEST OK");
});

app.use(express.static("build"));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}\n`);
});