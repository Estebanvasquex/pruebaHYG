import { Button } from '@mui/material'
import React from 'react'

const CreateUser = (props) => {
  const{handle,create}=props
  return (
    <div className="conteiner-users" >
    <div  className="card-user">
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#red",
          gap: "10px",
        }}
      >
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder='Nombre' name="name" onChange={handle} />
        </div>

        <div>
          <label htmlFor="">Edad</label>
          <input type="text" placeholder='Edad' name="age" onChange={handle}/>
        </div>

        <div>
          <label htmlFor="">Link imagen</label>
          <input type="defaul" placeholder='Link imagen' name="image" onChange={handle}/>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='email' name="email" onChange={handle}/>
        </div>
 
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='password' name="password" onChange={handle}/>
        </div>

        <Button color="primary" variant="contained" type="submit" onClick={create} sx={{ width: "60%" }} >
          Crear
        </Button>

       
      </div>
    </div>
  </div>
  )
}

export default CreateUser