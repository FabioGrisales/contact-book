const faker = require('faker');


class UsersServices {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 2;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:faker.internet.email()

      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 100);
    })
  }

  async finOne(id) {
    return this.users.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.users[index];
    this.users[index] = {
      ...product,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersServices;
