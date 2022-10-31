import app from "./app.js"
import dotenv from "dotenv"
import { sequelize } from "../lib/sequelize.js"

dotenv.config();

async function main() {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully") 
    app.listen(process.env.PORT || 3000)
    console.log(`Sever is listening on port ${process.env.PORT}`)
  }catch(err){
    console.error("Unable to connect to the database:", err.message)
  }
}

main()
