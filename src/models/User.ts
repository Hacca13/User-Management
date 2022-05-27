import mongoose from "mongoose"
import { User } from "../types/model"

const UserSchema = new mongoose.Schema<User>(
  {
    /** The user id */
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    /** The user first name */
    firstname: String,
    /** The user last name */
    lastname: String,
    /** The user email */
    email: String,
    /** The user gender */
    gender: ["Male" , "Female" , "Unspecified"],
    /** The user birthday*/
    birthday: Number,
    /** The user is Active*/
    isActive: Boolean,
    /** The desctiption of user*/
    desctiption: String,
    /** The lastAccess of user*/
    lastAccess: {
      mac: String,
      ip: String,
      userAgent: String
    }
  }
)


export default mongoose.model<User>("User", UserSchema)
