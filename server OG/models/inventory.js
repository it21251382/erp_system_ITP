// Incomplete (Need to add more to the db)
mongoose = require("mongoose")

// Setting schema
const InventorySchema = new mongoose.Schema({
    sku: {
        type: Number,
        required: true,
    },
    inv_pro_name: {
        type: String,
        // required: true,
    },
    inv_pro_description: {
        type: String,
        // required: true,
    },
    inv_pro_quantity: {
        type: Number,
        // required: true,
    },
    inv_pro_cost: {
        type: Number,
        // required: true,
    },
    inv_pro_selling: {
        type: Number,
        // required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("Inventory", InventorySchema)