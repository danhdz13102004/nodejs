const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/department.controller');

router.post('/', departmentController.create);
router.get('/', departmentController.getAll);
router.put('/:id', departmentController.update);
router.delete('/:id', departmentController.delete);

module.exports = router;
