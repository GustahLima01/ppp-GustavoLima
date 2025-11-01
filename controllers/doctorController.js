const DoctorService = require('../services/doctorService');

const DoctorController = {
  register: (req, res, next) => {
    try {
      const doctor = DoctorService.register(req.body);
      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  },
  getAll: (req, res, next) => {
    try {
      const doctors = DoctorService.getAll();
      res.json(doctors);
    } catch (err) {
      next(err);
    }
  },
  getById: (req, res, next) => {
    try {
      const doctor = DoctorService.getById(req.params.id);
      res.json(doctor);
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      const doctor = DoctorService.update(req.params.id, req.body);
      res.json(doctor);
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      DoctorService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = DoctorController;
