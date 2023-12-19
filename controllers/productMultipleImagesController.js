const {randomUUID} = require('crypto');
const { readJSON, writeJSON } = require('../data');

module.exports = {
    list : (req,res) => {

    },
    add : (req,res) => {
        return res.render('productAddMultipleImages')
    },
    create :  (req,res) => {
       const newProduct = {
            id : randomUUID(),
            name : req.body.name,
            images : req.files.map(file => file.filename)
       };
       const products = readJSON('productsMultipleImages.json');
       products.push(newProduct);

       writeJSON(products, 'productsMultipleImages.json');

       return res.redirect('/')
    },
    edit : (req,res) => {

    },
    update : (req,res) => {

    },
    remove : (req,res) => {
        
    }

}