const express = require("express");
const homeController = require("../controllers/home");

const router = express.Router();

//showing home page
router.get("/", homeController.home);

//used to create the form
router.use("/create", require("./create"));

//used for viewing the item
router.use("/views", require("./views"));
module.exports = router;
