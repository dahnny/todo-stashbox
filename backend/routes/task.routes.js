const express = require("express");
const {
  create,
  update,
  deleteTask,
  findAll,
} = require("../services/task.services");
let app = express.Router();

app.get("/", async (req, res) => {
  try {
    const { filter } = req.query;
    const response = await findAll(filter ? filter : "all");
    return res
      .status(200)
      .json({ message: "Retrieved successfully", data: response });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

app.post("/", async (req, res) => {
  try {
    await create(req.body);
    return res
      .status(200)
      .json({ message: "Created Task Successfully", data: req.body });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

app.put("/:id", async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res
      .status(200)
      .json({ message: "Updated Task Successfully", data: req.body });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    await deleteTask(req.params.id);
    return res.status(200).json({ message: "Deleted Task Successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

module.exports = app;
