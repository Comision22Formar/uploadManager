module.exports = {
    list : (req,res) => {

    },
    add : (req,res) => {
        return res.render('productAddMainImage')
    },
    create :  (req,res) => {
        return res.send(req.body)
    },
    edit : (req,res) => {

    },
    update : (req,res) => {

    },
    remove : (req,res) => {
        
    }

}