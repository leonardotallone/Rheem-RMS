import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const partialLiberationContext = createContext();

const PartialLiberationProvider = ({ children }) => {
    const [idBatchPartialLiberation, setIdBatchPartialLiberation] = useState('');
    const [partialLiberation, setPartialLiberation] = useState();
    const [partialLiberationSuccess, setPartialLiberationSuccess] = useState('');
    const [partialLiberationError, setPartialLiberationError] = useState('');

    // console.log("ID BATCH STATE EN CONTEXT", idBatchPartialLiberation)
    // console.log("PARTIAL LIBERATION CONTEXT", partialLiberation);

  useEffect(() => {
    if(idBatchPartialLiberation && partialLiberation){
    axios
      .patch( `http://10.25.14.90:3001/lotes/partialLiberation/${idBatchPartialLiberation}`, partialLiberation)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setPartialLiberationSuccess("Parcialidad Definida Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al definir Parcialidad de Lote", error.message);
        setPartialLiberationError("Error al definir Parcialidad de Lote")
      });
    }
  }, [idBatchPartialLiberation, partialLiberation, setPartialLiberationSuccess, setPartialLiberationError]);


  return (
    <partialLiberationContext.Provider value={{ partialLiberationSuccess, partialLiberationError, setIdBatchPartialLiberation, setPartialLiberation }}>
      {children}
    </partialLiberationContext.Provider>
  );
};
export default PartialLiberationProvider;