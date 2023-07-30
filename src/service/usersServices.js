import { usersInstance } from "./usersInstance";

export const getUsers = ()=>{
    const users = usersInstance.get("/user")
    return users
}