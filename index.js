const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({"name":"this an OAuth test and feedback"});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);