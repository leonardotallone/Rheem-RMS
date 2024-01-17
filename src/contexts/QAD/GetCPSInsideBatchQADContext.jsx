import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getCPSInsideBatchQADContext = createContext();

const GetCPSInsideBatchQADProvider = ({ children }) => {
  const [batch, setBatch] = useState (10073);
  const [cpList, setCpList] = useState()
  
  // console.log("CPS INSIDE A BATCH" , cpList)

  useEffect(() => {  
    if(batch){
      axios
      .get("http://10.25.14.72:8072/rms/rest/rmsService/gettoken?usuario=fruiz&clave=c1234")
      .then((response) => {
        axios.get("http://10.25.14.72:8072/rms/rest/rmsService/getlote", {
          params: {
            token: response.data.response.token,
            lote:batch,
          },
        })
        .then((response) => {
          setCpList(response.data.response.listacp)
        });
      })
    }
  }, [batch, setCpList ]);
  
  return (
    <getCPSInsideBatchQADContext.Provider value={{ cpList, setBatch }}>
      {children}
    </getCPSInsideBatchQADContext.Provider>
  );
};
export default GetCPSInsideBatchQADProvider;