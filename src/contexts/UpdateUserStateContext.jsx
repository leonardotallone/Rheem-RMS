import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const updateUserStateContext = createContext();

const UpdateUserStateProvider = ({ children }) => {
    const [userState, setUserState] = useState();
    const [idUserState, setIdUserState] = useState();
    const [errorState, setErrorState] = useState('');
    const [successState, setSuccessState] = useState('');

    const stateJson = {
      status_user:userState
    }

  useEffect(() => {
    if(stateJson && idUserState){
    axios
      .patch( `http://10.25.14.90:3001/users/status/${idUserState}`, stateJson)
      .then((response) => {
      console.log("RESPUESTA", response.data.data)
      setSuccessState("Estado actualizado Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al actualizar usuario:", error.message);
        setErrorState("Error al bloquear Usuario")
      });
    }
  }, [idUserState, stateJson, setErrorState]);


  return (
    <updateUserStateContext.Provider value={{ setUserState, userState, setIdUserState, errorState, successState}}>
      {children}
    </updateUserStateContext.Provider>
  );
};
export default UpdateUserStateProvider;