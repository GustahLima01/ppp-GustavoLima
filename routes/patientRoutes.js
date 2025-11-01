const express = require('express');
const PatientController = require('../controllers/patientController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticateToken, PatientController.register);
router.get('/', authenticateToken, PatientController.getAll);
router.get('/:id', authenticateToken, PatientController.getById);
router.put('/:id', authenticateToken, PatientController.update);
router.delete('/:id', authenticateToken, PatientController.delete);

module.exports = router;
