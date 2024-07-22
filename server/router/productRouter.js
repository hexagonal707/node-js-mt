const router = require('express').Router();

const {addProductInfo,deleteProductInfo,updateProductInfo,getProductInfo,getAllProductInfo} = require('../controller/productController');


router.post('/additem', addProductInfo)

router.delete('/deleteitem/:id', deleteProductInfo)

router.put('/updateitem/:id', updateProductInfo)

router.get('/getitem/:id', getProductInfo)

router.get('/getAllProductInfo', getAllProductInfo)

module.exports = router;