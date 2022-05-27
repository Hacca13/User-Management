export interface CreateUserDTO {
  /** The user id */
  id: number,
  /** The user first name */
  firstName: string
  /** The user last name */
  lastName: string
  /** The user email */
  email: string
  /** The user gender */
  gender: "Male" | "Female" | "Unspecified"
  /** The user birthday*/
  birthday: number
  /** The user is Active*/
  isActive: boolean
  /** The desctiption of user*/
  desctiption: string
  /** The lastAccess of user*/
  lastAccess: {
    mac: string
    ip: string
    userAgent: string
  }
}
