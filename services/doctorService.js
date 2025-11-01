const doctors = require('../models/doctor');
const { v4: uuidv4 } = require('uuid');

const DoctorService = {
  register: (data) => {
    const { name, specialty } = data;
    const doctor = { id: uuidv4(), name, specialty };
    doctors.push(doctor);
    return doctor;
  },
  getAll: () => doctors,
  getById: (id) => {
    const doctor = doctors.find(d => d.id === id);
    if (!doctor) throw { status: 404, message: 'Médico não encontrado' };
    return doctor;
  },
  update: (id, data) => {
    const doctor = doctors.find(d => d.id === id);
    if (!doctor) throw { status: 404, message: 'Médico não encontrado' };
    Object.assign(doctor, data);
    return doctor;
  },
  delete: (id) => {
    const idx = doctors.findIndex(d => d.id === id);
    if (idx === -1) throw { status: 404, message: 'Médico não encontrado' };
    doctors.splice(idx, 1);
    return true;
  }
};

module.exports = DoctorService;
