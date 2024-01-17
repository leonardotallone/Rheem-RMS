import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getPositionByAreaContext = createContext();

const GetPositionByAreaProvider = ({ children }) => {
  const [areaId, setAreaId] = useState();
  const [positions, setPosition] = useState();

  useEffect(() => {
    if(areaId){
    axios
      .get( `http://10.25.14.90:3001/positions/listPositions/${areaId}` )
      .then((response) => setPosition(response.data))
      .catch((error) => {
        console.error("Error al obtener Areas:", error);
      });
    }
  }, [areaId, setPosition ]);

  return (
    <getPositionByAreaContext.Provider value={{ positions, setAreaId }}>
      {children}
    </getPositionByAreaContext.Provider>
  );
};
export default GetPositionByAreaProvider;