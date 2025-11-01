# Assistente de Triagem Médica Inteligente

## Objetivo
API Rest para gerenciamento de clínica, pacientes, médicos, sintomas e agendamentos, com autenticação JWT e documentação Swagger.

## Estrutura do Projeto
- `app.js`: Inicialização do servidor Express
- `routes/`: Rotas da API
- `controllers/`: Lógica dos endpoints
- `services/`: Regras de negócio
- `models/`: Estruturas de dados em memória
- `middlewares/`: Middlewares (ex: autenticação)
- `resources/`: Documentação Swagger
- `config/`, `utils/`: Configurações e utilitários

## Funcionalidades
- Registro, edição, exclusão, consulta e login de usuário da clínica
- Registro, edição, exclusão e consulta de paciente
- Registro, edição, exclusão e consulta de médico
- Registro, edição, exclusão e consulta de sintomas
- Consulta de especialista médico com base no sintoma
- Agendamento de consulta médica

## Autenticação
- JWT obrigatório para rotas protegidas
- Login retorna token JWT

## Documentação Swagger
- Disponível em `/api-docs`

## Como rodar
1. Instale dependências: `npm install`
2. Inicie o servidor: `node app.js`
3. Acesse a documentação: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Observações
- Banco de dados em memória (os dados são perdidos ao reiniciar)
- Para testar endpoints protegidos, obtenha o token via login e envie no header `Authorization: Bearer <token>`
