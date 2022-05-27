import { Request, Response } from "express"
import { Result } from "../../types/routes"
import { UserModel } from "../../models"
import { User } from "../../types/model"
import { PipelineStage } from "mongoose"



export const getAll = async (req: Request, res: Response<Result<User[]>>) => {
  const users = await UserModel.find() as User[]
  return res.status(200).send({success:true , data: users})
}

export const getById = async (req: Request, res: Response<Result<any>>) => {
  const id = req.params.id
  const user = await UserModel.findOne({id}) as User
  if(!user) {
    return res.status(404).send({success:false , message: "User not found"})
  }

  return res.status(200).send({success:true , data: user})
}

export const retriveData = async (req: Request, res: Response<Result<any>>) => {
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const createUser = async (req: Request, res: Response<Result<User>>) => {
  const user = req.body as User
  const id = user.id 

  // Check if the id is already used by another user
  const idOwner = await UserModel.findOne({id})
  if (idOwner) {
    return res.status(400).send({ success: false, message: "The id is already used by another user" })
  }

  // Create the user
  const newUser = new UserModel(user)
  const savedUser = await newUser.save()
  return res.status(201).send({ success: true, data: savedUser })
}

export const updateUser = async (req: Request, res: Response<Result<any>>) => {
  // const id = req.params.id
  // const userRequest = req.body
  // const { email } = userRequest
 
  // if(email !== undefined) {
  //   const userResult = await UserModel.findOne({email})

  
  //   if (userResult && (!userResult._id.equals(id))) {
  //     return res.status(400).send({ success: false, message: "Email already used" })
  //   }
  // }
  
  // const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
 
  // if (!user) {
  //   return res.status(404).send({ success: false, message: "Cannot find a user with the specified ID" })
  // }
  // return res.status(200).send({ success: true, data: user })
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const deleteUser = async (req: Request, res: Response<Result<string>>) => {
  const id = req.params.id
  const user = await UserModel.findOne({id})
  
  if (!user) {
    return res.status(404).send({ success: false, message: "Cannot find a user with the specified ID" })
  }

  user.remove()
  return res.status(200).send({ success: true, data: "User deleted" })
  
}
