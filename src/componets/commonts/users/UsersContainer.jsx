import React, { useEffect, useState } from 'react'
import Users from './Users'
import { deleteUserById, getUsers } from '../../../service/usersServices'

const UsersContainer = () => {
  const [userData, setUserData] = useState([])
  const [isChange, setIsChange] = useState(false)

  useEffect(()=>{
    setIsChange(false)
    const apiUsers = getUsers();
    apiUsers.then((res)=> setUserData(res.data))
  },[isChange])

  const handleDelete = (id) => 
  {
    console.log("hola mundo")
    deleteUserById(id)
    setIsChange(true)
  }

 
  

  return (
    


    <div ><Users data = {userData} handleDelete={handleDelete}/></div>
  )
}

export default UsersContainer