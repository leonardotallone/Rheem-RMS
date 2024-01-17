import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const updatePlanStateContext = createContext();

const UpdatePlanStateProvider = ({ children }) => {
    const [planState, setPlanState] = useState('');
    const [idPlan, setIdPlan] = useState();
    const [last_modification, setLastModification] = useState(null);
    const [publicationDate, setPublicationDate] = useState('');
    const [successPlanState, setSuccessPlanState] = useState('');
    const [errorPlanState, setErrorPlanState] = useState('');

    const stateJson = {
      state: planState,
      modification_count:1,
      last_modification:last_modification,
      publication_date:publicationDate,
    }
  useEffect(() => {
    if(idPlan){
    axios
      .patch( `http://10.25.14.90:3001/planes/updatePlanStatus/${idPlan}`, stateJson)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setSuccessPlanState("Plan Actualizado Exitosamente.!")
    })
      .catch((error)  => {
        console.error("Error al actualizar usuario:", error.message);
        setErrorPlanState("Error al actualizar Plan")
      });
    }
  }, [idPlan, setErrorPlanState, setSuccessPlanState]);


  return (
    <updatePlanStateContext.Provider value={{ successPlanState, errorPlanState, setIdPlan, setPlanState, setLastModification, setPublicationDate }}>
      {children}
    </updatePlanStateContext.Provider>
  );
};
export default UpdatePlanStateProvider;