const Movie=require("../Models/Movie")
const slugify = require("slugify");

exports.getList = async (req, res) =>
  res.json(await Movie.find({}).sort({ createdAt: -1 }).exec());

exports.createList=


exports.createList = async (req, res) => {
  try {
    const { title,slug,producer,actors } = req.body;
    const movie = await new Movie({ title, slug: slugify(title),producer,actors }).save();
     res.json(movie);
  
  } catch (err) {
   
    res.status(400).send("Create failed");
  }
};

