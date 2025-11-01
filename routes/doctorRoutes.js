const express = require('express');
const DoctorController = require('../controllers/doctorController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticateToken, DoctorController.register);
router.get('/', authenticateToken, DoctorController.getAll);
router.get('/:id', authenticateToken, DoctorController.getById);
router.put('/:id', authenticateToken, DoctorController.update);
router.delete('/:id', authenticateToken, DoctorController.delete);

module.exports = router;
