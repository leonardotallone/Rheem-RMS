import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getBatchStatusQADContext = createContext();

const GetBatchStatusQADProvider = ({ children }) => {
  const [batch, setBatch] = useState (10073);
  const [batchStatus, setBatchStatus] = useState()
  
  // console.log("BATCH STATUS" , batchStatus)

  useEffect(() => {  
    if(batch){
      axios
      .get("http://10.25.14.72:8072/rms/rest/rmsService/gettoken?usuario=fruiz&clave=c1234")
      .then((response) => {
        axios.get("http://10.25.14.72:8072/rms/rest/rmsService/getestado", {
          params: {
            token: response.data.response.token,
            lote:batch,
          },
        })
        .then((response) => {
          setBatchStatus(response.data.response)
        });
      })
    }
  }, [batch, setBatchStatus ]);
  
  return (
    <getBatchStatusQADContext.Provider value={{ batchStatus, setBatch }}>
      {children}
    </getBatchStatusQADContext.Provider>
  );
};
export default GetBatchStatusQADProvider;