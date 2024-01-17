import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const updateBatchContext = createContext();

const UpdateBatchProvider = ({ children }) => {
    const [idBatchUpdate, setIdBatchUpdate] = useState('');
    const [updatedBatch, setUpdatedBatch] = useState();
    const [updateBatchSuccess, setUpdateBatchSuccess] = useState('');
    const [updateBatchError, setUpdateBatchError] = useState('');

    // console.log("ID BATCH EN CONTEXT", idBatchUpdate)
    // console.log("UPDATED BATCH CONTEXT", updatedBatch);

  useEffect(() => {
    if(idBatchUpdate && updatedBatch){
    axios
      .patch( `http://10.25.14.90:3001/lotes/updateLote/${idBatchUpdate}`, updatedBatch)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateBatchSuccess("Lote Actualizado Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al actualizar Lote", error.message);
        setUpdateBatchError("Error al actualizar Lote")
      });
    }
  }, [updatedBatch, idBatchUpdate, updateBatchSuccess, updateBatchError]);


  return (
    <updateBatchContext.Provider value={{ setIdBatchUpdate, setUpdatedBatch, updateBatchSuccess, updateBatchError }}>
      {children}
    </updateBatchContext.Provider>
  );
};
export default UpdateBatchProvider;