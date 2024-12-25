const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 0; // Ensure stock is not negative
            },
            message: 'Stock cannot be negative'
        }
    },
    category: { type: String, required: true },
    series: {
        type: String,
        required: function () {
            return this.category === 'Smartphones'; // Series is required for "Smartphones"
        },
        validate: {
            validator: function (value) {
                // Ensure series is a non-empty string when required
                return this.category !== 'Smartphones' || (value && value.trim().length > 0);
            },
            message: 'Series is required for Mobile products'
        }
    },
    images: [{ type: String }]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
