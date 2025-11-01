const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const app = express();

app.use(express.json());

// Swagger setup (arquivo será criado depois)
const swaggerDocument = require('./resources/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Rotas
const clinicUserRoutes = require('./routes/clinicUserRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const symptomRoutes = require('./routes/symptomRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

app.use('/api/clinic-users', clinicUserRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/appointments', appointmentRoutes);

// Middleware de erro genérico
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
