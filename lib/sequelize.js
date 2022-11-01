import configDB from "../config/config.js"
import { Sequelize } from "sequelize"
import setModels from "../db/models/index.js"

const USER = encodeURIComponent(configDB.dbUser)
const PASSWORD = encodeURIComponent(configDB.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${configDB.dbHost}:${configDB.dbPort}/${configDB.dbName}`

export const sequelize = new Sequelize(URI,{
  dialect:"postgres",
  logging:true
})

setModels(sequelize)

sequelize.sync({force:true})
