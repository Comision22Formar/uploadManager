const express = require('express');
const { list, add, create, edit, update, remove } = require('../controllers/productMultipleImagesController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products-multiple-images */

router 
    .get('/',list)
    .get('/add',add)
    .post('/add',upload.array('multiple-images'), create)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/remove/:id',remove)




module.exports = router;