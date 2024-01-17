import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const indirectPasswordRecoverPasswordContext = createContext();

const IndirectPasswordRecoverPasswordProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRecoverError, setPasswordRecoverError] = useState('');
  const [passwordRecoverSuccess, setPasswordRecoverSuccess] = useState('');

  const passwordToken = localStorage.getItem('passwordToken');
  // console.log("TOKEN", passwordToken)
  // console.log("EMAIL", email)
  // console.log("PASSWORD", password)
  
  const json = {
    resetPasswordToken:passwordToken,
    email: email,
    password: password,
  }
  // console.log("JSON", json)
 

  useEffect(() => {
    if(passwordToken !== null && email !== undefined && password !== undefined){
    axios
      .patch("http://10.25.14.90:3001/auth/reset-password", json)
      .then((response) => console.log("Respuesta", response.data))
      .then(()=> {
        setPasswordRecoverSuccess("Contraseña Actualizada Exitosamente")
      })
      .catch((error) => { 
        setPasswordRecoverError("Error al Recuperar Contraseña")
        console.error('Error al Recuperar Contraseña:', error)
   });
}
  }, [passwordToken, email, password]);

  return (
    <indirectPasswordRecoverPasswordContext.Provider value={{setEmail, setPassword , passwordRecoverError, passwordRecoverSuccess }}>
      {children}
    </indirectPasswordRecoverPasswordContext.Provider>
  );
};
export default IndirectPasswordRecoverPasswordProvider;