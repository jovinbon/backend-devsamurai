import Customer from "../models/Customer";

const customers = [
 { id: 1, name: "Filho da mãe", site: "http://devblack.com.br" },
 { id: 2, name: "Filho da puta", site: "http://google.com" },
 { id: 3, name: "Filho da rapariga", site: "http://uol.com.br" },
 { id: 4, name: "Filho da bicha", site: "http://yahoo.com" },
];

class CustomersController {
 // Listagem dos Customers
 async index(req, res) {
  const data = await Customer.findAll({
   limit: 1000,
  });
  return res.json(data);
 }

 // Recupera um Customer
 show(req, res) {
  const id = parseInt(req.params.id, 10);
  const customer = customers.find((item) => item.id === id);
  const status = customer ? 200 : 404;

  console.log("GET :: /customers/:id ", JSON.stringify(customer));

  return res.status(status).json(customer);
 }

 // Cria um novo Customer
 create(req, res) {
  const { name, site } = req.body;
  const id = customers[customers.length - 1].id + 1;
  const newCustomer = { id, name, site };
  customers.push(newCustomer);

  console.log("CREATE :: /customers/:id ");

  return res.status(201).json(newCustomer);
 }

 // Atualiza um Customer
 update(req, res) {
  const id = parseInt(req.params.id, 10);
  const { name, site } = req.body;
  const index = customers.findIndex((item) => item.id === id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
   customers[index] = { id: parseInt(id, 10), name, site };
  }
  console.log("UPDATE :: /customers/:id ", status);

  return res.status(status).json(customers[index]);
 }

 // Exclui um Customer
 destroy(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = customers.findIndex((item) => item.id === id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
   customers.splice(index, 1);
  }
  console.log("DELETE :: /customers/:id ", status);

  return res.status(status).json();
 }
}

export default new CustomersController();
