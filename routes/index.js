import {Router} from "express"
import PersonRouter from "./person.router.js"

export default function routerApi(app){
  const router = Router();
  app.use("/api/v1", router)
  router.use("/persons", PersonRouter)
}


