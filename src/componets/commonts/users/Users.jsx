import React from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./user.css";
import { IconButton } from "@mui/material";

const Users = (props) => {
  const { data, handleDelete, handleUpdate, handleFavorite } = props;
  return (
    <div className="conteiner-users">
      {data.map((item) => {
        return (
          <div key={item.id} className="card-user">
            <img src={item.image} alt="" />
            <div>
              <h5>{item.name}</h5>
              <h5>{item.email}</h5>
              <div className="icon-user">
                <IconButton sx={{width: "30px", height: "30px"}} onChange={handleDelete}>
                  <DeleteForeverIcon color="error" />
                </IconButton>
                <IconButton sx={{width: "30px", height: "30px"}} onChange={()=>{handleUpdate(item.id)}}>
                <UpdateIcon color="primary"  />
                </IconButton>
                <IconButton sx={{width: "30px", height: "30px"}} onChange={handleFavorite}>
                  <FavoriteIcon color="primary" />
                </IconButton>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
