import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllReserveBatchsInPlanContext = createContext();

const GetAllReserveBatchsInPlanProvider = ({ children }) => {
  const [idPlan, setIdPlan] = useState();
  const [allReserveBatchsInPlan, setAllReserveBatchsInPlan] = useState();

// console.log("ID PLAN RESERVE IN CONTEXT", idPlan)
// console.log("Todos los planes de reserva",allReserveBatchsInPlan )

  useEffect(() => {
    if(idPlan){
      axios
        .get(`http://10.25.14.90:3001/lotes/findLotesEnReservaPlan/${idPlan}`)
        .then((response) => {
            setAllReserveBatchsInPlan(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los lotes en Reserva:", error.message);
        });
      }
  }, [setAllReserveBatchsInPlan, idPlan]);

  return (
    <getAllReserveBatchsInPlanContext.Provider value={{ allReserveBatchsInPlan, setIdPlan }}>
      {children}
    </getAllReserveBatchsInPlanContext.Provider>
  );
};
export default GetAllReserveBatchsInPlanProvider;