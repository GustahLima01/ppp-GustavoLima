const clinicUsers = require('../models/clinicUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middlewares/auth');
const { v4: uuidv4 } = require('uuid');

const ClinicUserService = {
  register: async (data) => {
    const { name, email, password } = data;
    if (clinicUsers.find(u => u.email === email)) {
      throw { status: 409, message: 'Usuário já cadastrado' };
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = { id: uuidv4(), name, email, password: hashedPassword };
    clinicUsers.push(user);
    return { id: user.id, name: user.name, email: user.email };
  },
  login: async (email, password) => {
    const user = clinicUsers.find(u => u.email === email);
    if (!user) throw { status: 401, message: 'Usuário não encontrado' };
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw { status: 401, message: 'Senha inválida' };
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
    return { token };
  },
  getAll: () => clinicUsers.map(({ password, ...u }) => u),
  getById: (id) => {
    const user = clinicUsers.find(u => u.id === id);
    if (!user) throw { status: 404, message: 'Usuário não encontrado' };
    const { password, ...rest } = user;
    return rest;
  },
  update: (id, data) => {
    const user = clinicUsers.find(u => u.id === id);
    if (!user) throw { status: 404, message: 'Usuário não encontrado' };
    Object.assign(user, data);
    const { password, ...rest } = user;
    return rest;
  },
  delete: (id) => {
    const idx = clinicUsers.findIndex(u => u.id === id);
    if (idx === -1) throw { status: 404, message: 'Usuário não encontrado' };
    clinicUsers.splice(idx, 1);
    return true;
  }
};

module.exports = ClinicUserService;
