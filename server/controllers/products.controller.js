const productsCtrl = {}
const Product = require("../models/product")

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

productsCtrl.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.param)
        res.json(product)
    } catch (err){
        next()
    } 
}

productsCtrl.getProductsByType = async (req, res) => {
    const products = await Product.find({type: req.params.param})
    res.json(products)
}

productsCtrl.getFeaturedProducts = async (req, res) => {
    const products = await Product.find({featured: true})
    res.json(products)
}

productsCtrl.getOnSaleProducts = async (req, res) => {
    const onSale = await Product.find({onSale: true})
    res.json(onSale)
}

productsCtrl.createProduct = async (req, res) => {
    const {title, description, price, images, type, onSale, hasStock} = req.body
    const product = new Product({title, description, price, images, type, onSale, hasStock})
    await product.save()
    res.json({message: "Producto guardado correctamente!"})
}

productsCtrl.updateProduct = async (req, res) => {
    const {title, description, price, images, type, onSale, hasStock, featured} = req.body
    await Product.findOneAndUpdate({_id: req.params.id}, {title, description, price, images, type, onSale, hasStock, featured})
    res.json({message: "Producto actualizado correctamente!"})
}

productsCtrl.deleteProduct = async (req, res) => {
    await Product.findOneAndDelete({_id: req.params.id})
    res.json({message: "Producto eliminado correctamente!"})
}

module.exports = productsCtrl