import {Router} from "express"
import Person from "../service/person.service.js"

const service = new Person()
const router = Router()

router.post("/",async(req, res)=>{
  try{
    const body = req.body
    const newPerson = await service.create(body)
    res.status(201).json(newPerson)
    
  }catch(error){
    res.status(400).json({error: error.message})
  }
})

export default router
