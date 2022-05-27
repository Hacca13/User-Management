import type { JSONSchemaType } from "ajv"
import { CreateUserDTO } from "../../types/validation"

export const createUserSchema: JSONSchemaType<CreateUserDTO> = {
  type: "object",
  properties: {
    id: {
      type: "number",
      minimum: 1
    },  
    firstName:{
      type: "string",
      minLength: 1,
    },
    lastName:{
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
      type: "object",
      properties: {
        mac: {
          type: "string",
          minLength: 1,
        },
        ip: {
          type: "string",
          minLength: 1,
        },
        userAgent: {
          type: "string",
          minLength: 1,
        }
      },
      required: ["mac", "ip", "userAgent"]
    },    
  },
  required: ["id", "firstName", "lastName", "email", "gender", "birthday", "isActive", "desctiption", "lastAccess"],
  additionalProperties: false,
}
