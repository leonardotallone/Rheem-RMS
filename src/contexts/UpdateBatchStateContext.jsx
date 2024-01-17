import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const updateBatchStateContext = createContext();

const UpdateBatchStateProvider = ({ children }) => {
    const [idBatchStateUpdate, setIdBatchStateUpdate] = useState('');
    const [batchState, setBatchState] = useState();
    const [updateBatchStateSuccess, setUpdateBatchStateSuccess] = useState('');
    const [updateBatchStateError, setUpdateBatchStateError] = useState('');

    // console.log("ID BATCH STATE EN CONTEXT", idBatchStateUpdate)
    // console.log("UPDATED BATCH STATE CONTEXT", batchState);

  useEffect(() => {
    if(batchState && idBatchStateUpdate){
    axios
      .patch( `http://10.25.14.90:3001/lotes/updateStateLote/${idBatchStateUpdate}`, batchState)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateBatchStateSuccess("Estado Actualizado Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al actualizar Estado", error.message);
        setUpdateBatchStateError("Error al actualizar Estado")
      });
    }
  }, [setUpdateBatchStateSuccess, setUpdateBatchStateError, idBatchStateUpdate, batchState]);


  return (
    <updateBatchStateContext.Provider value={{ setIdBatchStateUpdate, setBatchState, updateBatchStateSuccess, updateBatchStateError }}>
      {children}
    </updateBatchStateContext.Provider>
  );
};
export default UpdateBatchStateProvider;