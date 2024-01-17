import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const rmsProfileContext = createContext();

const RMSProfileProvider = ({ children }) => {
  const [idUsuario, setIdUsuario] = useState();
  const [RMSProfile, setRMSProfile] = useState();

  useEffect(() => {
    if(idUsuario){
    axios
      .get( "http://10.25.14.90:3001/users-profiles-rms/listAllProcess/" + idUsuario )
      .then((response) => setRMSProfile(response.data[0].profile))
      .catch(function (error) {
        console.error("Error al obtener datos:", error);
      });
    }
  }, [idUsuario, setRMSProfile]);

  return (
    <rmsProfileContext.Provider value={{ setIdUsuario, RMSProfile }}>
      {children}
    </rmsProfileContext.Provider>
  );
};
export default RMSProfileProvider;
