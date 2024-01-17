import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getUserAndOverseerByUserIDContext = createContext();

const GetUserAndOverseerByUserIDProvider = ({ children }) => {
  const [userID, setUserID] = useState();
  const [findedUser, setFindedUser] = useState();

  // console.log("leo", userID)
  

  useEffect(() => {
    if(userID){
    axios
      .get(`http://10.25.14.90:3001/users/findOverseerById/${userID}`)
      .then((response) => {
        console.log("RESPUESTA" ,response.data)
        setFindedUser(response.data)
      }) 
      .catch((error) => {
        console.error("Error al buscar overseer:", error);
      });
    }
  }, [userID]);


  return (
    <getUserAndOverseerByUserIDContext.Provider value={{ setUserID, findedUser }}>
      {children}
    </getUserAndOverseerByUserIDContext.Provider>
  );
};
export default GetUserAndOverseerByUserIDProvider;