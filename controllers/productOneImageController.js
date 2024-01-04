const {randomUUID} = require('crypto')
const { readJSON, writeJSON } = require('../data')

module.exports = {
    list : (req,res) => {

    },
    add : (req,res) => {
        return res.render('productAddOneImage')
    },
    create :  (req,res) => {
        const newProduct = {
            id : randomUUID(),
            name : req.body.name,
            image : req.file ? req.file.filename : null
        }

        const products = readJSON('productsOneImage.json');
        products.push(newProduct);
        writeJSON(products,'productsOneImage.json')
        return res.redirect('/')
    },
    edit : (req,res) => {
        const id = req.params.id;
        const products = readJSON('productsOneImage.json');

        const product = products.find(product => product.id == id)

        return res.render('productEditOneImage',{
            ...product
        });
    },
    update : (req,res) => {
        const products = readJSON('productsOneImage.json');

        const productsModify = products.map(product => {
            if(product.id == req.params.id){
                product.name = req.body.name;
                product.image = req.file ? req.file.filename : product.image;
            }

            return product
        })

        writeJSON(productsModify,'productsOneImage.json')
        return res.redirect('/')


    },
    remove : (req,res) => {
        
    }

}