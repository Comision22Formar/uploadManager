const express = require('express');
const { list, add, create, edit, update, remove } =require('../controllers/productMainImageController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products-main-image" */

router 
    .get('/',list)
    .get('/add',add)
    .post('/create', upload.fields([
        {
            name : 'mainImage'
        },
        {
            name : 'images'
        }
    ]), create)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/remove/:id',remove)




module.exports = router;