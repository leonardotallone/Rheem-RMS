import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const reprocessRandDContext = createContext();

const ReprocessRandDProvider = ({ children }) => {
  const [reprocessRandD, setReprocessRandD] = useState();
  const [reprocessSuccess, setReprocessSuccess] = useState('');
  const [reprocessError, setReprocessError] = useState('');


//  console.log("REPROCESS R&D CONTEXT",reprocessRandD )

  useEffect(() => {
    if (reprocessRandD) {
      axios
        .post("http://10.25.14.90:3001/request-reprocessing/createRequest/", reprocessRandD)
        .then((response) => {
          console.log("USUARIO CREADO EXITOSAMENTE", response.data)
          setReprocessSuccess('Informe Emitido Exitosamente')
        })
        .catch((error) => {
          setReprocessError('Error al emitir Informe')
          console.error("Error al emitir informe", error.message);
        });
    }
  }, [reprocessRandD]);

  return (
    <reprocessRandDContext.Provider value={{ setReprocessRandD, reprocessSuccess, reprocessError }}>
      {children}
    </reprocessRandDContext.Provider>
  );
};
export default ReprocessRandDProvider;
