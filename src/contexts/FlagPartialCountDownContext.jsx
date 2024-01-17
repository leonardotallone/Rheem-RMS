import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const flagPartialCountdownContext = createContext();

const FlagPartialCountdownProvider = ({ children }) => {
   
    const [idLote, setIdLote] = useState();
    const [successFlagChange, setSuccessFlagChange] = useState('');
    const [errorFlagChange, setErrorFlagChange] = useState('');

    // console.log("ID LOTE EN CONTEXT", idLote)

    
    const flagState = {
        flag_partial_countdown:0,
    }
    useEffect(() => {
    if(idLote){
    axios
      .patch( `http://10.25.14.90:3001/lotes/updateFlagLote/${idLote}`, flagState)
      .then((response) => {
      console.log("FLAG UPDATE SUCCESS", response.data)
      setSuccessFlagChange("Flag Update Success")
    })
      .catch((error)  => {
        console.error("FLAG UPDATE ERROR", error.message);
        setErrorFlagChange("Error Updating Flag")
      });
    }
  }, [idLote, setErrorFlagChange, setSuccessFlagChange]);


  return (
    <flagPartialCountdownContext.Provider value={{ successFlagChange, errorFlagChange, setIdLote }}>
      {children}
    </flagPartialCountdownContext.Provider>
  );
};
export default FlagPartialCountdownProvider;