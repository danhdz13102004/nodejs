const Employee = require('../models/employee.model');

exports.create = async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
};

exports.getAll = async (req, res) => {
  const employees = await Employee.find().populate('department');
  res.json(employees);
};

exports.update = async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(emp);
};

exports.delete = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
};
