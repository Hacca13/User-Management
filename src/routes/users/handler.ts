import { Request, Response } from "express"
import { Result } from "../../types/routes"
import { UserModel } from "../../models"
import { User } from "../../types/model"
import { PipelineStage } from "mongoose"



export const getAll = async (req: Request, res: Response<Result<any>>) => {

  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const getById = async (req: Request, res: Response<Result<any>>) => {
  
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const retriveData = async (req: Request, res: Response<Result<any>>) => {
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const createUser = async (req: Request, res: Response<Result<any>>) => {
 
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const updateUser = async (req: Request, res: Response<Result<any>>) => {
  
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}

export const deleteUser = async (req: Request, res: Response<Result<string>>) => {
  
  return res.status(200).send({success:true , data: "This API is not implemented yet"})
}
