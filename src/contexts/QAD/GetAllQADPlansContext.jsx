import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getAllQADPlansContext = createContext();

const GetAllQADPlansProvider = ({ children }) => {
  const [sku, setSku] = useState (320260132);
  const [allQADPlans, setAllQADPlans] = useState();


  // console.log("QAD PLANS" , allQADPlans)

  useEffect(() => {  
    if(sku){
      axios
      .get("http://10.25.14.72:8072/rms/rest/rmsService/gettoken?usuario=fruiz&clave=c1234")
      .then((response) => {
      axios.get("http://10.25.14.72:8072/rms/rest/rmsService/getplano", {
          params: {
            token: response.data.response.token,
            sku: sku,
          },
        })
        .then((response) => {
          setAllQADPlans(response.data.response.plano)
        });
      })
    }
  }, [setAllQADPlans, sku]);
  
  return (
    <getAllQADPlansContext.Provider value={{ allQADPlans, setSku }}>
      {children}
    </getAllQADPlansContext.Provider>
  );
};
export default GetAllQADPlansProvider;
