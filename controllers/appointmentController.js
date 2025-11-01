const AppointmentService = require('../services/appointmentService');

const AppointmentController = {
  schedule: (req, res, next) => {
    try {
      const appointment = AppointmentService.schedule(req.body);
      res.status(201).json(appointment);
    } catch (err) {
      next(err);
    }
  },
  getAll: (req, res, next) => {
    try {
      const appointments = AppointmentService.getAll();
      res.json(appointments);
    } catch (err) {
      next(err);
    }
  },
  getById: (req, res, next) => {
    try {
      const appointment = AppointmentService.getById(req.params.id);
      res.json(appointment);
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      AppointmentService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = AppointmentController;
