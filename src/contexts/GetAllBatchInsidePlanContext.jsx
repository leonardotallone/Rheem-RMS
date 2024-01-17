import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllBatchInsidePlanContext = createContext();

const GetAllBatchInsidePlanProvider = ({ children }) => {
  const [idPlanBatch, setIdPlanBatch] = useState('')
  const [allBatchs, setAllBatchs] = useState();

  // console.log("idPlan in Context", idPlan)

  useEffect(() => {  
    if(idPlanBatch){
      axios
        .get(`http://10.25.14.90:3001/lotes/findLotes/${idPlanBatch}`)
        .then((response) => {
            setAllBatchs(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los planes:", error.message);
        });
    }
  }, [idPlanBatch]);


  return (
    <getAllBatchInsidePlanContext.Provider value={{ allBatchs, setIdPlanBatch }}>
      {children}
    </getAllBatchInsidePlanContext.Provider>
  );
};
export default GetAllBatchInsidePlanProvider;