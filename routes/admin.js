const express = require('express');
const Product = require('../models/Product');
const router = express.Router();



// Add a product
router.post('/products', async (req, res) => {
  try {
      const { name, description, price, stock, category, images, series } = req.body;

      // Create the product
      const product = new Product({ name, description, price, series, stock, category, images });
      await product.save();

      res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
      res.status(400).json({
          error: 'Error creating product',
          details: error
      });
  }
});

// Edit a product
router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error updating product', details: error });
  }
});

// Remove a product
router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product', details: error });
  }
});

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products', details: error });
  }
});

module.exports = router;
