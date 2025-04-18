const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user.routes');
const departmentRoutes = require('./routes/department.routes');
const employeeRoutes = require('./routes/employee.routes');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://danh:danh@cluster0.udfhbjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err));

app.use('/api/users', userRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', require('./routes/auth.routes'));
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
