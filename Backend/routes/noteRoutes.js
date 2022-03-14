const express = require ('express');
const {getNotes} = require ("../controller/notesController");
const {protect} = require("../middlewares/authMiddleware")
const {createNote} = require ("../controller/notesController")

const router = express.Router();

router.route("/").get(protect,getNotes);
router.route("/create").get(protect,createNote);

module.exports = router;