const express =  require('express');
const bodyPaser = require('body-parser')
require('dotenv').config();

const api = require('./backend/routes')

const app = express();

app.use(bodyPaser.json());

app.get('/', (req, res) => {
    res.json({
        success: true
    })

})

app.use('/api', api);

const PORT = process.env.PORT;
app.listen(PORT)
