import { Request, Response } from "express"
import { Result } from "../../types/routes"
import { UserModel } from "../../models"
import { User } from "../../types/model"
import { PatchUserDto } from "../../types/validation"
import { getUserData, getUserList } from "../../services"
import { AxiosError } from "axios"


export const getAll = async (req: Request, res: Response<Result<User[]>>) => {
  const users = (await UserModel.find()) as User[]
  return res.status(200).send({ success: true, data: users })
}

export const getById = async (req: Request, res: Response<Result<any>>) => {
  const id = req.params.id
  const user = (await UserModel.findOne({ id })) as User
  if (!user) {
    return res.status(404).send({ success: false, message: "User not found" })
  }

  return res.status(200).send({ success: true, data: user })
}

export const retriveData = async (req: Request, res: Response<Result<any>>) => {
  const arrayUser = await getUserList() as User[]
  

  for (const user of arrayUser){
    const axiosData = await getUserData(user.id)
    
    if(!axiosData){
      return res.status(500).send({ success: false, message: "Error on get user data" })
    }

    const userData = axiosData as User

    // Create the user
    const newUser = new UserModel(userData)
    await newUser.save()
  }
  
  return res.status(200).send({ success: true, data: "Users added to the database" })
}

export const createUser = async (req: Request, res: Response<Result<User>>) => {
  const user = req.body as User
  const id = user.id

  // Check if the id is already used by another user
  const idOwner = await UserModel.findOne({ id })
  if (idOwner) {
    return res.status(400).send({ success: false, message: "The id is already used by another user" })
  }

  // Create the user
  const newUser = new UserModel(user)
  const savedUser = await newUser.save()
  return res.status(201).send({ success: true, data: savedUser })
}

export const updateUser = async (req: Request, res: Response<Result<User>>) => {
  const id = req.params.id
  const user = req.body as PatchUserDto
  const idOwner = user.id

  // Check if the id is already used by another user
  if (idOwner !== undefined) {
    const idNumber = parseInt(id)
    const idOwnerExist = (await UserModel.findOne({ id: idOwner })) as User

    if (idOwnerExist && idOwnerExist.id != idNumber) {
      return res.status(400).send({ success: false, message: "Id already used" })
    }
  }

  // Update the user
  const updatedUser = await UserModel.findOneAndUpdate({ id }, user, { new: true })

  if (!updatedUser) {
    return res.status(404).send({ success: false, message: "User not found" })
  }

  return res.status(200).send({ success: true, data: updatedUser })
}

export const deleteUser = async (req: Request, res: Response<Result<string>>) => {
  const id = req.params.id
  const user = await UserModel.findOne({ id })

  if (!user) {
    return res.status(404).send({ success: false, message: "Cannot find a user with the specified ID" })
  }

  user.remove()
  return res.status(200).send({ success: true, data: "User deleted" })
}
