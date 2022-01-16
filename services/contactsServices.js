const faker = require('faker');


class ContactsServices {
  constructor() {
    this.contacts = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.contacts.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:faker.internet.email(),
        tel:faker.phone.phoneNumber()

      });
    }
  }

  async create(data) {
    const newContact = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.contacts);
      }, 25);
    })
  }

  async finOne(id) {
    return this.contacts.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.contacts.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    const contact = this.contacts[index];
    this.contacts[index] = {
      ...contact,
      ...changes,
    };
    return this.contacts[index];
  }

  async delete(id) {
    const index = this.contacts.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('product not found');
    }
    this.contacts.splice(index, 1);
    return { id };
  }
 }

 module.exports = ContactsServices;
