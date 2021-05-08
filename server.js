const express =  require('express');
const bodyPaser = require('body-parser')
require('dotenv').config();

const api = require('./backend/routes')

const app = express();

app.use(bodyPaser.json());

app.use('/api', api);

if( process.env.NODE_ENV === 'production'){
    // Express vai entregar os assests de produção
    // como por exemplo: main.js ou main.css
    // arquivos staticos presisão ser carregados em memória
    app.use(express.static('frontend/build'));

    //Express vai entregar o index.html, se não recenhecer o roda.
    const path = require('path');
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build', 'index.html'))
    })
}



const PORT = process.env.PORT;
app.listen(PORT)
