const Department = require('../models/department.model');

exports.create = async (req, res) => {
  const dept = new Department(req.body);
  await dept.save();
  res.json(dept);
};

exports.getAll = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};

exports.update = async (req, res) => {
  const dept = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dept);
};

exports.delete = async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: 'Department deleted' });
};
