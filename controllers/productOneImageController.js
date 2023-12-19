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

    },
    update : (req,res) => {

    },
    remove : (req,res) => {
        
    }

}