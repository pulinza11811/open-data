const Product = require('../model/product')


exports.read = async (req,res) =>
{
    try
    {
        const id = req.params.id
        const producted = await Product.findOne({_id:id}).exec()
        res.send(producted)
    }
    catch (err)
    {
        console.log(err);
        res.status(404).send('Server Error')
    }
}

exports.list = async (req,res) =>
{
    try
    {
        const producted = await Product.find({}).exec()
        res.send(producted)
    }
    catch (err)
    {
        console.log(err);
        res.status(404).send('Server Error')
    }
}

exports.create = async (req,res) =>
{
    try
    {
        console.log(req.body);
        const producted = await Product(req.body).save()
        res.send(producted)
    }
    catch (err)
    {
        console.log(err);
        res.status(404).send('Server Error')
    }
}

exports.update = async (req,res) =>
{
    try
    {
        const id = req.params.id
        const updated = await Product
        .findOneAndUpdate({_id:id},req.body, {new: true})
        .exec()
        res.send(updated)
    }
    catch (err)
    {
        console.log(err);
        res.status(404).send('Server Error')
    }
}
exports._delete = async (req,res) =>
{
    try
    {
        const id = req.params.id
        const _deleted = await Product
        .findOneAndDelete({_id:id}).exec()
        res.send('Delete Success')
    }
    catch (err)
    {
        console.log(err);
        res.status(404).send('Server Error')
    }
}