import { usersInstance } from "./usersInstance";

export const getUsers = ()=>{
    const users = usersInstance.get("/user")
    return users
}

export const getUsersById = (id)=>{
    const user = usersInstance.get(`/user/${id}`)
    return user
}

export const deleteUserById = (id)=>{
    usersInstance.delete(`/user/${id}`)
}

export const updateUsersById = (id, data)=>{
    usersInstance.patch(`/user/${id}`, data);  
}

export const serviceCreateUser = (data)=>
{
    return usersInstance.post("/user", data)
}

