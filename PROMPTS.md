Objetivo  

Criar uma API Rest com a função de ser uma assistente de triagem médica inteligente.  

Contexto  

A API possui as seguintes funcionalidades:  

 - registro de usuário da clínica
 - edição de registro de usuário da clínica
 - exclusão de registro de usuário da clínica
 - consulta de usuário da clínica
 - login de usuário da clinica
 - edição de registro do paciente
 - exclusão de registro do paciente
 - registro do paciente
 - consulta de registro do paciente
 - registro do médico
 - edição de registro do médico
 - exclusão de registro do médico
 - consulta de registro do médico
 - registro dos sintomas
 - edição de registro dos sintomas
 - exclusão de registro dos sintomas
 - consulta de registro dos sintomas
 - consulta de especialista médico com base no sintoma informado
 - agendamento de consulta médica. 

Regras  

Não me pergunte nada, só faça., 
A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API., 
Adicione um endpoint para renderizar o Swagger., 
Construa um arquivo README para descrever o projeto, 
Divida a API em camadas: routes, controllers, service e model, 
Armazene os dados da API em um banco de dados em memória, 
Utilize a biblioteca express para construir a API Rest, 
Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto. 