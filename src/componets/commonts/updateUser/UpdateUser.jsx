import { Button } from "@mui/material";
import React from "react";
import "./updateUser.css";

const UpdateUser = (props) => {
  const { item, handleChange, updateUser } = props;
  return (
    <div className="conteiner-users" >
      <div key={item.id} className="card-user">
        <img src={item.image} alt="" />
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
            <input type="text" defaultValue={item.name} name="name" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" defaultValue={item.email} name="email" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Link imagen</label>
            <input type="defaul" defaultValue={item.image} name="image" onChange={handleChange}/>
          </div>

          <Button color="primary" variant="contained" type="submit" onClick={updateUser} sx={{ width: "60%" }} >
            Actualizar
          </Button>

          <div className="icon-user"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
