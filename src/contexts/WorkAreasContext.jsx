import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const workAreasContext = createContext();

const WorkAreasProvider = ({ children }) => {
  const [workAreas, setWorkAreas] = useState();
  
  useEffect(() => {
    axios
      .get("http://10.25.14.90:3001/work-areas/list-all-work_area")
      .then((response) => setWorkAreas(response.data))
      .catch(function (error) {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <workAreasContext.Provider value={{ workAreas }}>
      {children}
    </workAreasContext.Provider>
  );
};
export default WorkAreasProvider;