import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const mvtUpdateProductionStatusContext = createContext();

const MVTUpdateProductionStatusProvider = ({ children }) => {
    const [productionMvtStatus, setProductionMvtStatus] = useState();
    const [id_mvt_production, setId_mvt_production] = useState();
    const [updateMvtProductionStatusSuccess, setUpdateMvtProductionStatusSuccess] = useState('');
    const [updateMvtProductionStatusError, setUpdateMvtProductionStatusError] = useState('');
    
  useEffect(() => {
    if(id_mvt_production && productionMvtStatus){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/update-prod-status/${id_mvt_production}`, productionMvtStatus)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateMvtProductionStatusSuccess("MVT Aprobada Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al Aprobar MVT", error.message);
        setUpdateMvtProductionStatusError("Error al Aprobar MVT")
      });
    }
  }, [id_mvt_production, productionMvtStatus, setUpdateMvtProductionStatusSuccess, setUpdateMvtProductionStatusError]);


  return (
    <mvtUpdateProductionStatusContext.Provider value={{ setProductionMvtStatus, setId_mvt_production, updateMvtProductionStatusSuccess, updateMvtProductionStatusError}}>
      {children}
    </mvtUpdateProductionStatusContext.Provider>
  );
};
export default MVTUpdateProductionStatusProvider;