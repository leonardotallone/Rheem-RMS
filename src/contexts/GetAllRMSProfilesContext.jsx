import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const rmsProfilesContext = createContext();

const RMSProfilesProvider = ({ children }) => {
  const [RMS_Profiles, setRMS_Profiles] = useState();
  
  useEffect(() => {
    axios
      .get('http://10.25.14.90:3001/profile-rms/null-mac' )
      .then((response) => setRMS_Profiles(response.data))
      .catch((error)=> {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <rmsProfilesContext.Provider value={{ RMS_Profiles }}>
      {children}
    </rmsProfilesContext.Provider>
  );
};
export default RMSProfilesProvider;