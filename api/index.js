const crear = require('./app')

const express = require('express')
const app = express()
const port = 3005

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", ["GET,HEAD,PUT,PATCH,POST,DELETE"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/create', (req, res) => {
    console.log(req.body);
    
    crear(req.body)
    res.send('creado')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
