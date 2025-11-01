const express = require('express');
const AppointmentController = require('../controllers/appointmentController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticateToken, AppointmentController.schedule);
router.get('/', authenticateToken, AppointmentController.getAll);
router.get('/:id', authenticateToken, AppointmentController.getById);
router.delete('/:id', authenticateToken, AppointmentController.delete);

module.exports = router;
