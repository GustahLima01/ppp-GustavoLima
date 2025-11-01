const SymptomService = require('../services/symptomService');

const SymptomController = {
  register: (req, res, next) => {
    try {
      const symptom = SymptomService.register(req.body);
      res.status(201).json(symptom);
    } catch (err) {
      next(err);
    }
  },
  getAll: (req, res, next) => {
    try {
      const symptoms = SymptomService.getAll();
      res.json(symptoms);
    } catch (err) {
      next(err);
    }
  },
  getById: (req, res, next) => {
    try {
      const symptom = SymptomService.getById(req.params.id);
      res.json(symptom);
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      const symptom = SymptomService.update(req.params.id, req.body);
      res.json(symptom);
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      SymptomService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  },
  findSpecialist: (req, res, next) => {
    try {
      const specialists = SymptomService.findSpecialist(req.params.id);
      res.json(specialists);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = SymptomController;
