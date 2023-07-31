import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsersById, updateUsersById } from "../../../service/usersServices";
import UpdateUser from "./UpdateUser";

const UpdateUserContainer = () => {
  const [user, setUser] = useState({});

  const [userUpdate, setUserUpdate] = useState({
    name: "",
    image: "",
    email: "",
  });
  const { id } = useParams();
  const nav = useNavigate();

  console.log(id);

  useEffect(() => {
    const apiUser = getUsersById(id);
    apiUser.then((res) => setUser(res.data)).catch((err) => console.log(err));
  }, []);

  const updateUser = () => {
    console.log(userUpdate);
    updateUsersById(id, userUpdate);
    nav("/users")
  };

  console.log(userUpdate);

  const handleChange = (event) => {
    setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {
        <UpdateUser
          item={user}
          handleChange={handleChange}
          updateUser={updateUser}
        />
      }
    </div>
  );
};

export default UpdateUserContainer;
