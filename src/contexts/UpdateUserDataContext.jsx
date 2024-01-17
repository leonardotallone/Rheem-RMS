import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const updateUserDataContext = createContext();

const UpdateUserDataProvider = ({ children }) => {
    const [idUpdateUser, setIdUpdateUser] = useState();
    const [updateUser, setUpdateUser] = useState();
    const [errorUpdateData, setErrorUpdatedata] = useState('');
    const [successUpdateData, setSuccessUpdatedata] = useState('');

    // console.log("ID USER EN CONTEXT" , idUpdateUser)
    // console.log("UPDATED USER",updateUser )

  useEffect(() => {
    if(idUpdateUser && updateUser){
    axios
      .patch(`http://10.25.14.90:3001/users/updateUser/${idUpdateUser}`, updateUser)
      .then((response) => {
        console.log(response.data)
        setSuccessUpdatedata('Usuario Actualizado Exitosamente')
      })
      .catch((error)=> {
        console.error("Error al actualizar usuario:", error.message);
        setErrorUpdatedata("Error al Actualizar Usuario");
      });
    }
  }, [idUpdateUser, updateUser]);

  return (
    <updateUserDataContext.Provider value={{ setIdUpdateUser, setUpdateUser, errorUpdateData, successUpdateData }}>
      {children}
    </updateUserDataContext.Provider>
  );
};
export default UpdateUserDataProvider;