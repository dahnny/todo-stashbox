const Task = require("../models/task.models");

const create = async (data) => {
  try {
    const task = new Task(data);
    await task.save();
    return task;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const update = async (id, data) => {
  try {
    const task = await Task.findByIdAndUpdate(id, data);
    return task;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteTask = async (id) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    return task;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAll = async (filter) => {
  try {
    
    const tasks = await Task.find().where(filter).equals(true);
    return tasks;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  create,
  update,
  deleteTask,
  findAll,
};
