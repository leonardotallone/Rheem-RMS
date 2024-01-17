import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const mvtUpdateIndustrialStatusContext = createContext();

const MVTUpdatIndustrialStatusProvider = ({ children }) => {
    const [industrialMvtStatus, setIndustrialMvtStatus] = useState();
    const [id_mvt_industrial, setId_mvt_industrial] = useState();
    const [updateMvtIndustrialStatusSuccess, setUpdateMvtIndustrialStatusSuccess] = useState('');
    const [updateMvtIndustrialStatusError, setUpdateMvtIndustrialStatusError] = useState('');
    
  useEffect(() => {
    if(id_mvt_industrial && industrialMvtStatus){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/update-industrial-status/${id_mvt_industrial}`, industrialMvtStatus)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateMvtIndustrialStatusSuccess("MVT Aprobada Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al Aprobar MVT", error.message);
        setUpdateMvtIndustrialStatusError("Error al Aprobar MVT")
      });
    }
  }, [id_mvt_industrial, industrialMvtStatus, setUpdateMvtIndustrialStatusSuccess, setUpdateMvtIndustrialStatusError]);


  return (
    <mvtUpdateIndustrialStatusContext.Provider value={{ setIndustrialMvtStatus, setId_mvt_industrial, updateMvtIndustrialStatusSuccess, updateMvtIndustrialStatusError}}>
      {children}
    </mvtUpdateIndustrialStatusContext.Provider>
  );
};
export default MVTUpdatIndustrialStatusProvider;