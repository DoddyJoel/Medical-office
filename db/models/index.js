import {Person, PersonSchema} from "./person.model.js"

export default function setModels(sequelize){
  Person.init(PersonSchema, Person.config(sequelize))
}


