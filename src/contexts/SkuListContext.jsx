import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const skuListContext = createContext();

const SkuListProvider = ({ children }) => {
  const [skuList, setSkuList] = useState();

  

  useEffect(() => {  
      axios
        .get("http://10.25.14.90:3001/water-heaters/skus")
        .then((response) => {
            setSkuList(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener listado de SKU:", error.message);
        });
  }, []);

  return (
    <skuListContext.Provider value={{ skuList }}>
      {children}
    </skuListContext.Provider>
  );
};
export default SkuListProvider;