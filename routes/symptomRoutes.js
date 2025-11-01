const express = require('express');
const SymptomController = require('../controllers/symptomController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticateToken, SymptomController.register);
router.get('/', authenticateToken, SymptomController.getAll);
router.get('/:id', authenticateToken, SymptomController.getById);
router.put('/:id', authenticateToken, SymptomController.update);
router.delete('/:id', authenticateToken, SymptomController.delete);
router.get('/:id/specialists', authenticateToken, SymptomController.findSpecialist);

module.exports = router;
