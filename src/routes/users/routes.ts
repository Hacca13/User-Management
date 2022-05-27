import { Router } from "express"

import {
  retriveData,
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
} from "./handler"

const userRoutes = Router()

userRoutes.get("/retrive-data", retriveData)
userRoutes.get("/users", getAll)
userRoutes.post("/users", createUser)
userRoutes.get("/users/:id", getById)
userRoutes.patch("/users/:id", updateUser)
userRoutes.delete("/users/:id", deleteUser)

export default userRoutes
