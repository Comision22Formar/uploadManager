const { readJSON } = require("../data")

module.exports = {
    index : (req,res) => {
        const productsOneImage = readJSON('productsOneImage.json')
        return res.render('index',{
            productsOneImage
        })
    }
}