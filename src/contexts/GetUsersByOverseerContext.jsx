import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getUserByOverseerContext = createContext();

const GetUsersByOverseerProvider = ({ children }) => {
  const [overseerID, setOverseerID] = useState();
  const [overseerUsers, setOverseersUsers] = useState();

//   console.log("overseerID", overseerID)
  

  useEffect(() => {
    if(overseerID){
    axios
      .get("http://10.25.14.90:3001/users/findByOverseer/" + overseerID )
      .then((response) => {
        console.log("OVERSEER USERS", response.data)
        setOverseersUsers(response.data)
      }) 
      .catch((error) => {
        console.error("Error al buscar overseer:", error);
      });
    }
  }, [setOverseersUsers]);


  return (
    <getUserByOverseerContext.Provider value={{ setOverseerID, overseerUsers }}>
      {children}
    </getUserByOverseerContext.Provider>
  );
};
export default GetUsersByOverseerProvider;