import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const mvtUpdateStatusContext = createContext();

const MVTUpdateStatusProvider = ({ children }) => {
    const [mvtStatus, setMvtStatus] = useState();
    const [id_mvt, setId_mvt] = useState();
    const [updateMvtStatusSuccess, setUpdateMvtStatusSuccess] = useState('');
    const [updateMvtStatusError, setUpdateMvtStatusError] = useState('');
    
  useEffect(() => {
    if(id_mvt && mvtStatus){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/update-final-status/${id_mvt}`, mvtStatus)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateMvtStatusSuccess("MVT Aprobada Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al Aprobar MVT", error.message);
        setUpdateMvtStatusError("Error al Aprobar MVT")
      });
    }
  }, [mvtStatus, id_mvt, setUpdateMvtStatusSuccess, setUpdateMvtStatusError]);


  return (
    <mvtUpdateStatusContext.Provider value={{ setMvtStatus, setId_mvt, updateMvtStatusError, updateMvtStatusSuccess}}>
      {children}
    </mvtUpdateStatusContext.Provider>
  );
};
export default MVTUpdateStatusProvider;