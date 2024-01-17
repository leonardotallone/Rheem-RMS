import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const  counterMechanicPlansContext = createContext();

const CounterMechanicPlansProvider = ({ children }) => {
  const [mechanicCountPlans, setMechanicCountPlans] = useState();


  useEffect(() => {
   
      axios
        .get("http://10.25.14.90:3001/planes/mechanical-plans")
        .then((response) => {
          setMechanicCountPlans(response.data.mechanicalPlans_total_count)
        })
        .catch((error) => {
          console.error("Error Al Obterner NRO de Plan MECANICO", error.message);
        });
   
  }, [setMechanicCountPlans]);

  return (
    <counterMechanicPlansContext.Provider value={{ mechanicCountPlans }}>
      {children}
    </counterMechanicPlansContext.Provider>
  );
};
export default CounterMechanicPlansProvider;