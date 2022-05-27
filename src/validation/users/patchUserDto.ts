import type { JSONSchemaType } from "ajv"
import { PatchUserDto } from "../../types/validation"

export const patchUserSchema: JSONSchemaType<PatchUserDto> = {
  type: "object",
  properties: {
    id: {
      type: "number",
      minimum: 1,
      nullable: true
    },  
    firstName:{
      type: "string",
      minLength: 1,
      nullable: true
    },
    lastName:{
      type: "string",
      minLength: 1,
      nullable: true
    },
    email: {
      type: "string",
      format: "email",
      minLength: 1,
      nullable: true
    },
    gender:{
      type: "string",
      enum: ["Male" , "Female" , "Unspecified"],
      nullable: true
    }, 
    birthday: {
      type: "number",
      minimum: 1,
      nullable: true
    },
    isActive: {
      type: "boolean",
      nullable: true
    },
    desctiption: {
      type: "string",
      minLength: 1,
      nullable: true
    },
    lastAccess: {
      type: "object",
      nullable: true,
      properties: {
        mac: {
          type: "string",
          minLength: 1,
          nullable: true
        },
        ip: {
          type: "string",
          minLength: 1,
          nullable: true
        },
        userAgent: {
          type: "string",
          minLength: 1,
          nullable: true
        }
      },
    },    
  },
  additionalProperties: false,
}
