const express = require ('express');
const {getNotes} = require ("../controller/notesController");
const {protect} = require("../middlewares/authMiddleware")
const {createNote,getNoteById,updateNote,deleteNote} = require ("../controller/notesController")

const router = express.Router();

router.route("/").get(protect,getNotes);
router.route("/create").post(protect,createNote);
router.route("/:id").get(getNoteById).put(protect,updateNote).delete(protect,deleteNote);


module.exports = router;