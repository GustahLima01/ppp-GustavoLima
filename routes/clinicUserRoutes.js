const express = require('express');
const ClinicUserController = require('../controllers/clinicUserController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', ClinicUserController.register);
router.post('/login', ClinicUserController.login);
router.get('/', authenticateToken, ClinicUserController.getAll);
router.get('/:id', authenticateToken, ClinicUserController.getById);
router.put('/:id', authenticateToken, ClinicUserController.update);
router.delete('/:id', authenticateToken, ClinicUserController.delete);

module.exports = router;
