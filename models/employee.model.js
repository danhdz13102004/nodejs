const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
