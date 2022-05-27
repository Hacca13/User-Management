import axios, { AxiosError } from "axios"
import { User } from "../types/model"

export const getUserData = async (id:number) => {
    const path = "https://dds-test-mock-data.s3-eu-west-1.amazonaws.com/users/"+ id +".json"
    let res
    try {
        res = await axios.get(path)
    }catch(err) {
        return false
    }
    const user = res.data as User
    return user 
}
