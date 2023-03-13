module.exports = {
 dialect: "postgres",
 host: "localhost",
 username: "postgres",
 password: "postgres",
 database: "teste-dominando-nodejs",
 define: {
  timestamp: true, // cria duas colunas: createdAt e updatedAt
  underscored: true,
  underscoreAll: true,
 },
};
