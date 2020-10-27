const express = require("express");
const router = express.Router();

// @route        GET api/todo
// @desc         get all todo lists
// @access       Private
router.get("/", (req, res) => {
  res.send("Get all Todo lists");
});

// @route        POST api/todo
// @desc         Add New todo
// @access       Private
router.post("/", (req, res) => {
  res.send("Add New todo list");
});

// @route        PUT api/todo/:id
// @desc         Update a todo
// @access       Private
router.put("/:id", (req, res) => {
  res.send("Update todo list");
});

// @route        DELETE api/todo/:id
// @desc         DELETE a todo
// @access       Private
router.put("/:id", (req, res) => {
  res.send("Delete todo list");
});

module.exports = router;
