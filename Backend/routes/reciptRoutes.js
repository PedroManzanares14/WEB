const express = require('express');
const { getAllRecipts, getRecipt, createRecipt } = require('../controllers/reciptController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:id', getRecipt);
router.get('/', protect, admin, getAllRecipts);
router.post('/', createRecipt);

module.exports = router;
