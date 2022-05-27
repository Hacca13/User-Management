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

import { validateCreateUser, validateUserId, validatePatchUser } from "../../validation"

const userRoutes = Router()

// Retrive data
userRoutes.get("/retrive-data", retriveData)
// Get all users
userRoutes.get("/users", getAll)
// Create a new user
userRoutes.post("/users", validateBody(validateCreateUser),createUser)
// Get a user by id
userRoutes.get("/users/:id", validateParams(validateUserId), getById)
// Update a user by id
userRoutes.patch("/users/:id", validateParams(validateUserId), validateBody(validatePatchUser), updateUser)
// Delete a user by id
userRoutes.delete("/users/:id", validateParams(validateUserId),  deleteUser)

export default userRoutes
