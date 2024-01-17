import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const mvtUpdateQaStatusContext = createContext();

const MVTUpdateQaStateProvider = ({ children }) => {
    const [qaMvtStatus, setQaMvtStatus] = useState();
    const [id_mvt_qa, setId_mvt_qa] = useState();
    const [updateMvtQaStatusSuccess, setUpdateMvtQaStatusSuccess] = useState('');
    const [updateMvtQaStatusError, setUpdateMvtQaStatusError] = useState('');
    
  useEffect(() => {
    if(id_mvt_qa && qaMvtStatus){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/update-qa-status/${id_mvt_qa}`, qaMvtStatus)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateMvtQaStatusSuccess("MVT Aprobada Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al Aprobar MVT", error.message);
        setUpdateMvtQaStatusError("Error al Aprobar MVT")
      });
    }
  }, [id_mvt_qa, qaMvtStatus, setUpdateMvtQaStatusSuccess, setUpdateMvtQaStatusError]);


  return (
    <mvtUpdateQaStatusContext.Provider value={{ setQaMvtStatus, setId_mvt_qa, updateMvtQaStatusSuccess, updateMvtQaStatusError}}>
      {children}
    </mvtUpdateQaStatusContext.Provider>
  );
};
export default MVTUpdateQaStateProvider;