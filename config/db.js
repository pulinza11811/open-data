const mongoose = require('mongoose')

const connectDB = async () =>
{
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/information')
        //await mongoose.connect('mongodb+srv://pulin:test123@province-name.hj16yzc.mongodb.net/?retryWrites=true&w=majority&appName=province-name')
        //await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log('DB Connected');
    }
    catch (err)
    {
        console.log(err)
    }
}

module.exports = connectDB