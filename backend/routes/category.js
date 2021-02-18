const express = require('express');
const router = express.Router();

const { list, create, deleteCategory} = require('../controllers/categoryController');

router.get('/categories', list);
router.post('/create', create);
router.delete('/delete/:id', deleteCategory);

module.exports = router; 