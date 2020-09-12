const express = require("express");
const router = express.Router();
const ControllerView = require("../controllers/views.js");

router.get("/", ControllerView.views);
router.get("/delete", ControllerView.delete);
router.post("/search", ControllerView.search);

module.exports = router;
