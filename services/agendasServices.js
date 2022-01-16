const faker = require('faker');
class AgendasServices {
  constructor() {
    this.agendas = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.agendas.push({
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
      });
    }
  }

  async create(data) {
    const newAgenda = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.agendas.push(newAgenda);
    return newAgenda;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.agendas);
      }, 20);
    });
  }

  async finOne(id) {
    return this.agendas.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.agendas.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    const agendas = this.agendas[index];
    this.agendas[index] = {
      ...agendas,
      ...changes,
    };
    return this.agendas[index];
  }

  async delete(id) {
    const index = this.agendas.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    this.agendas.splice(index, 1);
    return { id };
  }
}

module.exports = AgendasServices;
