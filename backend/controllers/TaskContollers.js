const mongoose = require("mongoose");
const taskModel = require("../models/TaskModel");
const { error } = require("console");

//To Create a Task = POST
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await taskModel.create({ title, description });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// To get all Tasks = GET
const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// To get single Tasks = GET
const getSingleTasks = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Task Not Found" });
  }
  try {
    const singleTasks = await taskModel.findById(id);
    res.status(200).json(singleTasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// To update a task = PATCH

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Task Not Found" });
  }
  try {
    const task = await taskModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Task Not Found" });
  }
  try {
    const task = await taskModel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getSingleTasks,
  updateTask,
  deleteTask,
};
