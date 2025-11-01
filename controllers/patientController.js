const PatientService = require('../services/patientService');

const PatientController = {
  register: (req, res, next) => {
    try {
      const patient = PatientService.register(req.body);
      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  },
  getAll: (req, res, next) => {
    try {
      const patients = PatientService.getAll();
      res.json(patients);
    } catch (err) {
      next(err);
    }
  },
  getById: (req, res, next) => {
    try {
      const patient = PatientService.getById(req.params.id);
      res.json(patient);
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      const patient = PatientService.update(req.params.id, req.body);
      res.json(patient);
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      PatientService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = PatientController;
