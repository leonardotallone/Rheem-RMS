import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllRejectedBatchsContext = createContext();

const GetAllRejectedBatchsProvider = ({ children }) => {
  const [allRejectedBatchs, setAllRejectedBatchs] = useState();

  useEffect(() => {
      axios
        .get("http://10.25.14.90:3001/lotes/findRechazados")
        .then((response) => {
            setAllRejectedBatchs(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los lotes Rechazados", error.message);
        });
  }, [setAllRejectedBatchs]);

  return (
    <getAllRejectedBatchsContext.Provider value={{ allRejectedBatchs }}>
      {children}
    </getAllRejectedBatchsContext.Provider>
  );
};
export default GetAllRejectedBatchsProvider;