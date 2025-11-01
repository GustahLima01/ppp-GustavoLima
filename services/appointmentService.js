const appointments = require('../models/appointment');
const { v4: uuidv4 } = require('uuid');

const AppointmentService = {
  schedule: (data) => {
    const { patientId, doctorId, date } = data;
    const appointment = { id: uuidv4(), patientId, doctorId, date };
    appointments.push(appointment);
    return appointment;
  },
  getAll: () => appointments,
  getById: (id) => {
    const appointment = appointments.find(a => a.id === id);
    if (!appointment) throw { status: 404, message: 'Agendamento não encontrado' };
    return appointment;
  },
  delete: (id) => {
    const idx = appointments.findIndex(a => a.id === id);
    if (idx === -1) throw { status: 404, message: 'Agendamento não encontrado' };
    appointments.splice(idx, 1);
    return true;
  }
};

module.exports = AppointmentService;
