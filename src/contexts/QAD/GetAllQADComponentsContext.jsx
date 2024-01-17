import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllQADComponentsContext = createContext();

const GetAllQADComponentsProvider = ({ children }) => {
  const [batch, setBatch] = useState (10073);
  const [cp, setCp] = useState("CP00028173");
  const [components, setComponents] = useState();

  // console.log("QAD COMPONENTS" , components)

  useEffect(() => {  
    if(batch && cp){
      axios
      .get("http://10.25.14.72:8072/rms/rest/rmsService/gettoken?usuario=fruiz&clave=c1234")
      .then((response) => {
        axios.get("http://10.25.14.72:8072/rms/rest/rmsService/getcomponente", {
          params: {
            token: response.data.response.token,
            lote:batch,
            cp:cp,
          },
        })
        .then((response) => {
          setComponents(response.data.response.componente)
        });
      })
    }
  }, [batch, cp,setComponents ]);
  
  return (
    <getAllQADComponentsContext.Provider value={{ components, setCp, setBatch }}>
      {children}
    </getAllQADComponentsContext.Provider>
  );
};
export default GetAllQADComponentsProvider;