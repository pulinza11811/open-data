const mongoose = require('mongoose')
//
const productSchema =  mongoose.Schema
(
    {
        id: Number,
        provinceName: String,
        area: Number,
        region: String,

        districts:
        {
            name: String,
        },
    },
    // {
    //     timestamps: true,
    // },
)

const districtsSchema =  mongoose.Schema
(
    {
        districtName: String,
    },
    {
        timestamps: true,
    },
)

//module.exports = mongoose.model('product', productSchema)
module.exports = 
{
    Product: mongoose.model('product', productSchema),
    Districts: mongoose.model('districts', districtsSchema)
};