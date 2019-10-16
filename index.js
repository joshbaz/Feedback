const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send({'name': 'Brian'});
    next();
});
app.get('/dashboard', (req, res) =>{
    res.send({'description': 'A humbled Man'});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);  
