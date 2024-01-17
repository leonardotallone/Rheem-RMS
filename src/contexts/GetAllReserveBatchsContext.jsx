import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllReserveBatchsContext = createContext();

const GetAllReserveBatchsProvider = ({ children }) => {
  const [allReserveBatchs, setAllReserveBatchs] = useState();

  // console.log("All Reserve Batchs in Context", allReserveBatchs)

  useEffect(() => {
      axios
        .get("http://10.25.14.90:3001/lotes/findEnReserva")
        .then((response) => {
            setAllReserveBatchs(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener todos los lotes en Reserva:", error.message);
        });
  }, []);

  return (
    <getAllReserveBatchsContext.Provider value={{ allReserveBatchs }}>
      {children}
    </getAllReserveBatchsContext.Provider>
  );
};
export default GetAllReserveBatchsProvider;