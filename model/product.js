const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        ProvinceName: String,
        Population : 
        {
            type: Number
        }
        // detail:
        // {
        //     type: String
        // },
        // price:
        // {
        //     type: Number
        // }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product',productSchema)