import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const batchCounterContext = createContext();

const BatchCounterProvider = ({ children }) => {
  const [totalBatchs, setTotalBatchs] = useState();

  useEffect(() => {
      axios
        .get("http://10.25.14.90:3001/lotes/sumBatches")
        .then((response) => {
            setTotalBatchs(response.data.sumaTotalLotes)
        })
        .catch((error) => {
          console.error("Error Al Obterner Total de Lotes", error.message);
        });
  }, [setTotalBatchs]);

  return (
    <batchCounterContext.Provider value={{ totalBatchs }}>
      {children}
    </batchCounterContext.Provider>
  );
};
export default BatchCounterProvider;