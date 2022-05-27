import type { JSONSchemaType } from "ajv"
import { IDUserDto } from "../../types/validation"

export const mongooseIdSchema: JSONSchemaType<IDUserDto> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["id"],
  additionalProperties: false,
}
