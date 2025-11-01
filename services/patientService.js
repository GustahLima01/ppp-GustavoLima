const patients = require('../models/patient');
const { v4: uuidv4 } = require('uuid');

const PatientService = {
  register: (data) => {
    const { name, birthdate, clinicUserId } = data;
    const patient = { id: uuidv4(), name, birthdate, clinicUserId };
    patients.push(patient);
    return patient;
  },
  getAll: () => patients,
  getById: (id) => {
    const patient = patients.find(p => p.id === id);
    if (!patient) throw { status: 404, message: 'Paciente não encontrado' };
    return patient;
  },
  update: (id, data) => {
    const patient = patients.find(p => p.id === id);
    if (!patient) throw { status: 404, message: 'Paciente não encontrado' };
    Object.assign(patient, data);
    return patient;
  },
  delete: (id) => {
    const idx = patients.findIndex(p => p.id === id);
    if (idx === -1) throw { status: 404, message: 'Paciente não encontrado' };
    patients.splice(idx, 1);
    return true;
  }
};

module.exports = PatientService;
