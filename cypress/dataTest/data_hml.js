const { faker } = require('@faker-js/faker');

const teste_agibank = {
  emailSucesso: faker.internet.email(),
  mensagemSucesso: "Sucesso! Enviamos um e-mail para confirmar a sua assinatura. Encontre o e-mail agora e clique em 'Confirmar' para iniciar a inscrição.",
  emailInvalido: "teste@yopmail.com",
  mensagemErro: "Ops! Parece que a assinatura com este e-mail foi cancelada. Você pode gerenciar suas preferências no Gerenciador de assinaturas.",
  tituloNoticia: "Imposto do Pecado",
  emailExistente: "Bernice_Larson28@yahoo.com",
};

module.exports = { teste_agibank };
