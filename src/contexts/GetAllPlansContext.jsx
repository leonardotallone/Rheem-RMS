import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllPlansContext = createContext();

const GetAllPlansProvider = ({ children }) => {
  const [allPlans, setAllPlans] = useState();

  

  useEffect(() => {  
      axios
        .get("http://10.25.14.90:3001/planes/findAllPlans")
        .then((response) => {
            setAllPlans(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los planes:", error.message);
        });
  }, []);

  return (
    <getAllPlansContext.Provider value={{ allPlans }}>
      {children}
    </getAllPlansContext.Provider>
  );
};
export default GetAllPlansProvider;