const { Product, Districts } = require("../model/product");

exports.readProvince = async (req, res) => {
  try {
    const id = req.params.id;
    const producted = await Product.findOne({ _id: id }).lean().exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.readDistricts = async (req, res) => {
  try {
    const id = req.params.id;
    const producted = await Districts.findOne({ _id: id }).lean().exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.listProvince = async (req, res) => {
  try {
    const producted = await Product.find({}).lean().exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.listDistricts = async (req, res) => {
  const perPage = 50; // จำนวนรายการต่อหน้า
  const page = parseInt(req.query.page) || 1;
  try {
    const totalDistricts = await Districts.countDocuments();
    const districts = await Districts.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .lean()
      .exec();

    res.send({
      districts: districts,
      page: page,
      pages: Math.ceil(totalDistricts / perPage),
    });
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.createProvince = async (req, res) => {
  try {
    console.log(req.body);
    const producted = await Product(req.body).save();
    console.log(producted);
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.createDistricts = async (req, res) => {
  try {
    console.log(req.body);
    const producted = await Districts(req.body).save();
    console.log(producted);
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.updateProvince = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports.updateDistricts = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Districts.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports._deleteProvince = async (req, res) => {
  try {
    const id = req.params.id;
    const _deleted = await Product.findOneAndDelete({ _id: id }).exec();
    res.send("Delete Success");
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};

exports._deleteDistricts = async (req, res) => {
  try {
    const id = req.params.id;
    const _deleted = await Districts.findOneAndDelete({ _id: id }).exec();
    res.send("Delete Success");
  } catch (err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
};
