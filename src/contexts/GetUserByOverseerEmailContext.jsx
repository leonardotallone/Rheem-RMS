import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getUserByOverseerEmailContext = createContext();

const GetUsersByOverseerEmailProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [usersOverseer, setUsersOverseer] = useState();

  useEffect(() => {
    if(email){
    axios
      .get(`http://10.25.14.90:3001/overseer/findUsersByOverseerEmail/${email}`)
      .then((response) => {
        console.log("OVERSEER RESPUESTA", response.data)
        setUsersOverseer(response.data)
      }) 
      .catch((error) => {
        console.error("Error al buscar usuarios:", error);
      });
    }
  }, [setUsersOverseer, email]);

  return (
    <getUserByOverseerEmailContext.Provider value={{ usersOverseer, setEmail }}>
      {children}
    </getUserByOverseerEmailContext.Provider>
  );
};
export default GetUsersByOverseerEmailProvider;