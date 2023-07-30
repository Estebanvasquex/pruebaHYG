import React, { useEffect, useState } from 'react'
import Users from './Users'
import { getUsers } from '../../../service/usersServices'

const UsersContainer = () => {
  const [userData, setUserData] = useState([])

  useEffect(()=>{
    const apiUsers = getUsers();
    apiUsers.then((res)=> setUserData(res.data))
  },[])

 
  

  return (
    


    <div ><Users data = {userData}/></div>
  )
}

export default UsersContainer