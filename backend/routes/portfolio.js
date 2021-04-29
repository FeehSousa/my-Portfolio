
const router = require('express').Router();
const Portfolio = require('../models/Portfolio')

//CREATE
        //async assincrona
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title : req.body.title,
        description : req.body.description
    })
   
    try{
        //await espera retornar para colocar dentro da variavel savedPortfolio.
    const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    }catch (err){
        res.json({
            success:false,
            message: err.message
        })
        
    }
    
    
})
// READ
router.get('/', async (req, res)=> {
    try {
    const portfolio = await Portfolio.find()
    
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success:false,
            message: err
        })
    }

})
router.get('/:slug', async (req, res) =>{
    try {
        const portfolio =  await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success : true,
            data: portfolio
        })
    } catch (err) {
        res.json({ 
            success: false,
            message: err.message
        })
    }

})


// UPDATE

router.patch('/:slug', async (req, res) =>{
    try { 
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        }
        );
        res.json({
            success: true,
            updated: updatedPortfolio.nModified
        })
    }catch(err){
        res.json({
            success: false,
            message: err.message
        })
    }
})

//DELETE

router.delete('/:slug', async (req, res) =>{
    try{
        const deletedPortfolio =  await Portfolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })
    }catch(err){
        res.json({
            success: false,
            message: err.message
        })
    }
})



/*router.post('/', (req, res) =>{
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });
    portfolio
        .save()
        .then((data) =>{
            res.json({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            res.json({
                success: false,
                message: err
            })
        })
})*/

module.exports = router