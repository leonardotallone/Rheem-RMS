import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const overseerContext = createContext();

const OverseerProvider = ({ children }) => {
  const [overseerList, setOverseerList] = useState();

  useEffect(() => {
    axios
      .get( "http://10.25.14.90:3001/overseer/list-all-overseer")
      .then((response) => setOverseerList(response.data))
      .catch(function (error) {
        console.error("Error al obtener datos:", error);
      });
  }, [ ]);

  return (
    <overseerContext.Provider value={{ overseerList }}>
      {children}
    </overseerContext.Provider>
  );
};
export default OverseerProvider;