const {randomUUID} = require('crypto');
const { readJSON, writeJSON } = require('../data');

module.exports = {
    list : (req,res) => {

    },
    add : (req,res) => {
        return res.render('productAddMainImage')
    },
    create :  (req,res) => {

        const newProduct = {
            id : randomUUID(),
            name : req.body.name,
            mainImage : req.files.mainImage ? req.files.mainImage[0].filename : null,
            images : req.files.images ? req.files.images.map(image => image.filename) : null
        }

        const products = readJSON('productsMainImage.json');
        products.push(newProduct);

        writeJSON(products, 'productsMainImage.json');

        return res.redirect('/')
       
    },
    edit : (req,res) => {

    },
    update : (req,res) => {

    },
    remove : (req,res) => {
        
    }

}