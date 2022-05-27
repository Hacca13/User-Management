import axios from "axios"
import { User } from "../types/model"

export const getUserList = async () => {
    let userList: User[] = []
    await axios.get("https://dds-test-mock-data.s3-eu-west-1.amazonaws.com/users/list.json").then(res => {
        userList = res.data as User[]
    }).catch(err => {
        throw err
    })
    return userList
}