import {sequelize} from "../lib/sequelize.js"

const {models} = sequelize

class Person {
  async create(data) {
    const newPerson = await models.person.create(data)
    delete newPerson.dataValues.password
    return newPerson
  }
}

export default Person
