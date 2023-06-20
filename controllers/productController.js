const Product = require("../models/Product");
const productId = req.params.id;

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "get products success",
      data: products
    })
  } catch (err) {
    res.status(500).json({
      message: "get products success",
      data: err
    })
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(200).json({
      message: "post product success",
      data: savedProduct
    })
  } catch (err) {
    res.status(200).json({
      message: "post product success",
      data: err
    })
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update product success",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "update product success",
      data: err,
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(productId, req.body);
    res.status(200).json({
      message: "delete product success",
    });
  } catch (err) {
    res.status(500).json({
      message: "delete product failed",
    });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
