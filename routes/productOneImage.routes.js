const express = require('express');
const { list, add, create, edit, update, remove } = require('../controllers/productOneImageController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products-one-image */

router 
    .get('/',list)
    .get('/add',add)
    .post('/add',upload.single('one-image'), create)
    .get('/edit/:id',edit)
    .put('/update/:id',upload.single('one-image'),update)
    .delete('/remove/:id',remove)




module.exports = router;