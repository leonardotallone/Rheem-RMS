import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const createUserContext = createContext();

const CreateUserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [createUserError, setCreateUserError] = useState('');
  const [createUserSuccess, setCreateUserSuccess] = useState('');

  // console.log("NewUser en Context", newUser)

  useEffect(() => {
    if (newUser) {
      axios
        .post("http://10.25.14.90:3001/users/createUser", newUser)
        .then((response) => {
          console.log("USUARIO CREADO EXITOSAMENTE", response.data)
          setCreateUserSuccess('Usuario creado exitosamente')
        })
        .catch((error) => {
          setCreateUserError('Error al crear usuario')
          console.error("Error al crear usuario:", error.message);
        });
    }
  }, [newUser]);

  return (
    <createUserContext.Provider value={{ newUser, setNewUser, createUserError, createUserSuccess }}>
      {children}
    </createUserContext.Provider>
  );
};
export default CreateUserProvider;
