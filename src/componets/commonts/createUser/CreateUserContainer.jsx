import React, { useState } from "react";
import CreateUser from "./CreateUser";
import { serviceCreateUser } from "../../../service/usersServices";

const CreateUserContainer = () => {

  const [userNew, setUserNew] = useState({
    name: "",
    age: "",
    image: "",
    email: "",
    password: "",
  });

  console.log("hola mundo")


  const handleChange = (event) => {
    setUserNew({ ...userNew, [event.target.name]: event.target.value });
  };

  const createUser = () => 
  {
    console.log("en la función")
    let dataUser = 
    {
        name: userNew.name,
        age: Number(userNew.age),
        image: userNew.image,
        email: userNew.email,
        password: userNew.password,
    }

    serviceCreateUser(dataUser);


  }

  console.log(userNew)

  return (
    <div>
      <CreateUser create={createUser} handle={handleChange} />
    </div>
  );
};

export default CreateUserContainer;
