const ClinicUserService = require('../services/clinicUserService');

const ClinicUserController = {
  register: async (req, res, next) => {
    try {
      const user = await ClinicUserService.register(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await ClinicUserService.login(email, password);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
  getAll: (req, res, next) => {
    try {
      const users = ClinicUserService.getAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
  getById: (req, res, next) => {
    try {
      const user = ClinicUserService.getById(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      const user = ClinicUserService.update(req.params.id, req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      ClinicUserService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = ClinicUserController;
