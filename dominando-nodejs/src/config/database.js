module.exports = {
 dialect: "postgres",
 host: "localhost",
 username: "postgres",
 password: "123456",
 database: "teste-dominando-nodejs",
 define: {
  timestamp: true, // cria duas colunas: createdAt e updatedAt
  underscored: true,
  underscoreAll: true,
 },
};
