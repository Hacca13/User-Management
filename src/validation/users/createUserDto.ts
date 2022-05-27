import type { JSONSchemaType } from "ajv"
import { CreateUserDTO } from "../../types/validation"

export const createUserSchema: JSONSchemaType<CreateUserDTO> = {
  type: "object",
  properties: {
    id: {
      type: "number",
      minimum: 1,
    },  
    firstname:{
      type: "string",
      minLength: 1,
    },
    lastname:{
      type: "string",
      minLength: 1,
    },
    email: {
      type: "string",
      format: "email",
      minLength: 1,
    },
    gender:{
      type: "string",
      enum: ["Male" , "Female" , "Unspecified"],
    }, 
    birthday: {
      type: "number",
      minimum: 1
    },
    isActive: {
      type: "boolean",
    },
    desctiption: {
      type: "string",
      minLength: 1,
    },
    lastAccess: {
      mac: "string",
      ip: "string",
      userAgent: "string",
    },    
  },
  required: ["id", "firstname", "lastname", "email", "gender", "birthday", "isActive", "desctiption", "lastAccess"],
  additionalProperties: false,
}
