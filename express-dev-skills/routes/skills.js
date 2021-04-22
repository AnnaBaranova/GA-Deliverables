const express = require('express');
const router = express.Router();
const skillsCtrl = require("../controllers/skills.js")


router.get("/", skillsCtrl.index);
router.post("/", skillsCtrl.create);

router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);


module.exports = router;

