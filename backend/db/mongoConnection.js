const mongoose = require('mongoose')
const Portfolio = require('../models/Portfolio')

try {
    mongoose.connect(process.env.Mongo_URL_CONNECT , 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            dbName: 'portfolio'
        },
        () => {
        console.log('Conected to MongoDB')

        //Criando um portfolio de forma Statica.

        /*const portfolio = new Portfolio({
            title : "Meu primeiro projeto",
            description : "Portifolio criado em Nodejs com Mongo DB"
        })
        
        console.log("este é o objeto", portfolio)
            //await esperar o mongo DB salvar.
        const savedPortfolio = portfolio.save()
        console.log("Objeto Salvo", savedPortfolio)*/
        }
    )
} catch (err) {
    throw err
}
