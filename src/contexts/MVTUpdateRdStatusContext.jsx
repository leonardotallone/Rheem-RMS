import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const mvtUpdateRdStatusContext = createContext();

const MVTUpdateRdStatusProvider = ({ children }) => {
    const [rdMvtStatus, setRdMvtStatus] = useState();
    const [id_mvt_rd, setId_mvt_rd] = useState();
    const [updateMvtRdStausSuccess, setUpdateMvtRdStatusSuccess] = useState('');
    const [updateMvtRdnStatusError, setUpdateMvtRdStatusError] = useState('');
     

    // console.log( "ID en CONTEXT", id_mvt_rd)

  useEffect(() => {
    if(id_mvt_rd && rdMvtStatus){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/update-r&d-status/${id_mvt_rd}`, rdMvtStatus)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUpdateMvtRdStatusSuccess("MVT Aprobada Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al Aprobar MVT", error.message);
        setUpdateMvtRdStatusError("Error al Aprobar MVT")
      });
    }
  }, [id_mvt_rd, rdMvtStatus, setUpdateMvtRdStatusSuccess, setUpdateMvtRdStatusError]);


  return (
    <mvtUpdateRdStatusContext.Provider value={{ setRdMvtStatus, setId_mvt_rd, updateMvtRdStausSuccess, updateMvtRdnStatusError}}>
      {children}
    </mvtUpdateRdStatusContext.Provider>
  );
};
export default MVTUpdateRdStatusProvider;