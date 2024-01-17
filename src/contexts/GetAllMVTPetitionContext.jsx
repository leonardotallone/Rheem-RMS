import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllMVTPetitionsContext = createContext();

const GetAllMVTPetitionProvider = ({ children }) => {
 
  const [allMVTPetitions, setAllMTVPetitions] = useState();
  
  useEffect(() => {  
      axios
        .get('http://10.25.14.90:3001/petition-mvt/all-petitions')
        .then((response) => {
            setAllMTVPetitions(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los planes:", error.message);
        });
  }, [setAllMTVPetitions]);


  return (
    <getAllMVTPetitionsContext.Provider value={{ allMVTPetitions }}>
      {children}
    </getAllMVTPetitionsContext.Provider>
  );
};
export default GetAllMVTPetitionProvider;