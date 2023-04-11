


const express = require("express");

const router = express.Router();

const {
  create,
  list,
  read
 
} = require("../Controller/create");

router.post("/create",create);
router.get("/movielist", list);
router.get("/movielist/:slug", read);



module.exports = router;

