import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const loguedUserContext = createContext();

const LoginUserProvider = ({ children }) => {

  const [credentials, setCredentials] = useState();
  const [accessToken, setAccessToken] = useState();
  const [errorMsj, setErrorMsj] = useState();

//     ARIEL LABRA
//     "username":"15467636-8",
//     "password": "123456"
 
//     "username": edward.noguera@rheem.com
//     "password": "123456"

//      "username": carlos.saavedra@rheem.com
//      "password": "123456"
//      "username": 12345678-9
//      "password": "123456

//                  administrador_cuenta@rheem.com /12345678-8
//                  pass:123456

  useEffect(() => {
    if (credentials) {
    axios
    .post("http://10.25.14.90:3001/auth/login", credentials)
    .then((response) => {
      console.log(response.data);
      setAccessToken(response.data.data.access_token)
      localStorage.setItem("user", JSON.stringify(response.data.data.user_data))
      localStorage.setItem("accessToken",response.data.data.access_token)
    })
    .catch((error) => { 
        setErrorMsj('Las datos ingresados son Incorrectos')
        console.error('Error al loguear Usuario:', error);
   });
  }
 
  }, [credentials]);

  return (
    <loguedUserContext.Provider value={{ setCredentials, accessToken, errorMsj}}>
      {children}
    </loguedUserContext.Provider>
  );
};
export default LoginUserProvider;
