import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const indirectPasswordRecoverContext = createContext();

const IndirectPasswordRecoverProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [success, setSuccess] = useState();

 

  useEffect(() => {
    if(email){
    axios
      .patch("http://10.25.14.90:3001/auth/requestResetPassword", email)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("passwordToken", response.data.data.resetPasswordToken)
      })
      .then(()=> {
        setSuccess("Correo enviado Exitosamente")
      })
      .catch((error) => { 
        setEmailError("Error al enviar Correo Electrónico")
        console.error('error al enviar direccion de email:', error)
   });
}
  }, [email]);

  return (
    <indirectPasswordRecoverContext.Provider value={{ setEmail, setEmailError, emailError, success }}>
      {children}
    </indirectPasswordRecoverContext.Provider>
  );
};
export default IndirectPasswordRecoverProvider;
