import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAreaAndPositionUserContext = createContext();

const GetAreaAndPositionUserProvider = ({ children }) => {
  const [idForAreaAndPosition, setIdForAreaAndPosition] = useState();
  const [areaAndPosition, setAreaAndPosition] = useState();

  useEffect(() => {
    if(idForAreaAndPosition){
    axios
      .get( `http://10.25.14.90:3001/users/findOneById/${idForAreaAndPosition}` )
      .then((response) => setAreaAndPosition(response.data.user.position))
      .catch((error) => {
        console.error("Error al obtener Areas y Cargos", error);
      });
    }
  }, [idForAreaAndPosition, setAreaAndPosition ]);

  return (
    <getAreaAndPositionUserContext.Provider value={{ setIdForAreaAndPosition, areaAndPosition }}>
      {children}
    </getAreaAndPositionUserContext.Provider>
  );
};
export default  GetAreaAndPositionUserProvider;