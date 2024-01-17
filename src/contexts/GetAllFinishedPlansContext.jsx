import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllFinishedPlansContext = createContext();

const GetAllFinishedPlansProvider = ({ children }) => {
  const [finishedPlans, setAllFinishedPlans] = useState();

  useEffect(() => {  
      axios
        .get("http://10.25.14.90:3001/planes/findAllFinished")
        .then((response) => {
            setAllFinishedPlans(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los planes terminados", error.message);
        });
  }, []);

  return (
    <getAllFinishedPlansContext.Provider value={{ finishedPlans }}>
      {children}
    </getAllFinishedPlansContext.Provider>
  );
};
export default GetAllFinishedPlansProvider;