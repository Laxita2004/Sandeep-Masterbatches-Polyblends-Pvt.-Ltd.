const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Add a new product
router.post("/", async (req, res) => {
    const { name, image, description } = req.body;

    if (!name || !image || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = new Product({ name, image, description });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: "Failed to add product" });
    }
});

module.exports = router;
