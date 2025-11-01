const symptoms = require('../models/symptom');
const doctors = require('../models/doctor');
const { v4: uuidv4 } = require('uuid');

const SymptomService = {
  register: (data) => {
    const { name, description, specialty } = data;
    const symptom = { id: uuidv4(), name, description, specialty };
    symptoms.push(symptom);
    return symptom;
  },
  getAll: () => symptoms,
  getById: (id) => {
    const symptom = symptoms.find(s => s.id === id);
    if (!symptom) throw { status: 404, message: 'Sintoma não encontrado' };
    return symptom;
  },
  update: (id, data) => {
    const symptom = symptoms.find(s => s.id === id);
    if (!symptom) throw { status: 404, message: 'Sintoma não encontrado' };
    Object.assign(symptom, data);
    return symptom;
  },
  delete: (id) => {
    const idx = symptoms.findIndex(s => s.id === id);
    if (idx === -1) throw { status: 404, message: 'Sintoma não encontrado' };
    symptoms.splice(idx, 1);
    return true;
  },
  findSpecialist: (symptomId) => {
    const symptom = symptoms.find(s => s.id === symptomId);
    if (!symptom) throw { status: 404, message: 'Sintoma não encontrado' };
    const specialists = doctors.filter(d => d.specialty === symptom.specialty);
    return specialists;
  }
};

module.exports = SymptomService;
