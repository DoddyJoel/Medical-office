import { hash } from "bcrypt"
import {Model, DataTypes, Sequelize} from "sequelize"

const PERSON_TABLE = "persons"

const PersonSchema = {
  id:{
    field:"id_person",
    allowNull:false,
    primaryKey:true,
    type: DataTypes.STRING
  },
  name:{
    field:"name",
    allowNull:false,
    type: DataTypes.STRING
  },
  lastName:{
    field:"last_name",
    allowNull:false,
    type: DataTypes.STRING
  },
  phone:{
    field:"phone",
    allowNull:false,
    type:DataTypes.STRING
  },
  email:{
    field:"email",
    allowNull:false,
    unique:true,
    type: DataTypes.STRING
  },
  userName:{
    field:"user_name",
    allowNull:false,
    unique:true,
    type: DataTypes.STRING
  },
  password:{
    field:"password",
    allowNull:false,
    type: DataTypes.STRING
  },
  isDoctor:{
    field:"is_doctor",
    allowNull:false,
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    field:"created_at",
    allowNull:false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Person extends Model {
  static associate(_models){}
  static config(sequelize) {
    return {
      sequelize,
      tableName:PERSON_TABLE,
      modelName:"person",
      timestamps:false,
      hooks: {
        beforeCreate: async (person, _options) => {
          const password = await hash(person.password, 10)
          person.password = password
        }
      }
    }
  }
}

export {PERSON_TABLE, PersonSchema, Person }
