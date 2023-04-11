const Movie = require("../Models/Movie");

const slugify = require("slugify");

exports.create = async (req, res) => {
    console.log(req.body)
     try {
    const { title,slug,producer,actors } = req.body;
    const movie = await new Movie({ title, slug: slugify(title),producer,actors }).save();
     res.json(movie);
  
  } catch (err) {
   
    res.status(400).send("Create failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Movie.find({}).sort({ createdAt: -1 }).exec());


  exports.read = async (req, res) => {
  let moviedetails = await Movie.findOne({ slug: req.params.slug }).exec();
  res.json(moviedetails);
};