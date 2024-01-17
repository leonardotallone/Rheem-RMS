import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const resetPasswordDirectUserContext = createContext();

const ResetPasswordDirectUserProvider = ({ children }) => {
    const [newPassword, setNewPassword] = useState();
    const [userRUT, setUserRUT] = useState();
    const [newPasswordError, setNewPasswordError] = useState('')
    const [newPasswordSuccess, setNewPasswordSuccess] = useState('')

  useEffect(() => {
    if (newPassword && userRUT){
    axios
      .patch(`http://10.25.14.90:3001/users/updateDirectUssPass/${userRUT}`, newPassword)
      .then((response) => {
        console.log("RESPUESTA", response.data)
        setNewPasswordSuccess('Contraseña actualizada Exitosamente')
      })
      .catch((error) => {
        console.error("Error al actualizar contraseña:", error.message);
        setNewPasswordError('Error al actualizar contraseña')
      });
    }
  }, [newPassword, userRUT]);


  return (
    <resetPasswordDirectUserContext.Provider value={{ setNewPassword, setUserRUT, newPasswordError, newPasswordSuccess  }}>
      {children}
    </resetPasswordDirectUserContext.Provider>
  );
};
export default ResetPasswordDirectUserProvider;