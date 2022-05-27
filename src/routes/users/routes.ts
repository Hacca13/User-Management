import { Router } from "express"

import { validateBody, validateParams } from "../../middleware"

import {
  retriveData,
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
} from "./handler"

import { validateCreateUser, validateUserId } from "../../validation"

const userRoutes = Router()

userRoutes.get("/retrive-data", retriveData)
userRoutes.get("/users", getAll)
userRoutes.post("/users", validateBody(validateCreateUser),createUser)
userRoutes.get("/users/:id", validateParams(validateUserId), getById)
userRoutes.patch("/users/:id", validateParams(validateUserId), updateUser)
userRoutes.delete("/users/:id", validateParams(validateUserId),  deleteUser)

export default userRoutes
