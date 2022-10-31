import dotenv from "dotenv";

dotenv.config();

const configDB = {
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
  dbHost: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_NAME,
  dbPort: process.env.DATABASE_PORT,
};

export default configDB;
