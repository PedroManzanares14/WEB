const express = require('express');
const { getAllRecipts, getRecipt, createRecipt } = require('../controllers/reciptController');

const router = express.Router();

router.get('/:id', getRecipt);
router.get('/', getAllRecipts);
router.post('/', createRecipt);

module.exports = router;
