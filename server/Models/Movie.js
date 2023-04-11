const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    producer:{
        type:String,
        required:"Producer details needed"
    },
    actors:{
        type:Array,
        required:"Actor name is required"
        
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);