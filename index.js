const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({ test: "ok" });
});

app.use(express.static("build"));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}\n`);
});