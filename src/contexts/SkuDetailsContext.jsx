import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const skuDetailsContext = createContext();

const SkuDetailsProvider = ({ children }) => {
  const [sku, setSku] = useState();
  const [skuDetail, setSkuDetail] = useState();
  
  // console.log("SKU Details CONTEXT", sku)

  useEffect(() => {  
    if(sku){
      axios
        .get(`http://10.25.14.90:3001/water-heaters/getSkuData/${sku}`)
        .then((response) => {
            setSkuDetail(response.data)
        })
        .catch((error) => {
          console.error("Error al obtener detalles de SKU:", error.message);
        });
    }
  }, [sku]);

  return (
    <skuDetailsContext.Provider value={{ skuDetail, setSku }}>
      {children}
    </skuDetailsContext.Provider>
  );
};
export default SkuDetailsProvider;