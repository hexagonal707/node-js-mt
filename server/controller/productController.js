const ProductInfo = require('../model/ProductSchema');

const addProductInfo = async (req, res) => {
    try {
        const productInfo = new ProductInfo({

            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice,


        })

        await productInfo.save();
        res.status(200).json({success: true, message: 'Item added successfully.'});


    } catch (error) {

        console.error(error.response);
    }

}

const deleteProductInfo = async (req, res) => {
    try {

        await ProductInfo.findOneAndDelete(req.params.id, {})
        res.status(200).json({success: true, message: 'Item deleted successfully.'});


    } catch (error) {

        console.error(error.response);
    }

}

const updateProductInfo = async (req, res) => {
    try {

        console.log(req.body)

        const update = {
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice
        }

        const data = await ProductInfo.findByIdAndUpdate(req.params.id, {$set: update}, {new: true})


        res.status(200).json({success: true, message: 'Item updated successfully.'});

    } catch (error) {

        console.error(error.response);
    }

}

const getProductInfo = async (req, res) => {
    try {

        const data = await ProductInfo.findById(req.params.id, {}, {lean: true})
        res.status(200).send(data);

    } catch (error) {

        console.error(error.response);
    }

}

const getAllProductInfo = async (req, res) => {
    try {

        const data = await ProductInfo.find()
        console.log(data,"dataaaa")
        res.send(data);

    } catch (error) {

        console.error(error.response);
    }

}


module.exports = {addProductInfo, deleteProductInfo, updateProductInfo, getProductInfo, getAllProductInfo};