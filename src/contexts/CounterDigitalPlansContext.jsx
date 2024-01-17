import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const counterDigitalPlansContext = createContext();

const CounterDigitalPlansProvider = ({ children }) => {
  const [digitalCountPlans, setDigitalCountPlans] = useState();

  useEffect(() => {
   
      axios
        .get("http://10.25.14.90:3001/planes/digital-plans")
        .then((response) => {
          setDigitalCountPlans(response.data.digitalPlans_total_count)
        })
        .catch((error) => {
          console.error("Error Al Obterner NRO de Plan DIGITAL", error.message);
        });
   
  }, [setDigitalCountPlans]);

  return (
    <counterDigitalPlansContext.Provider value={{ digitalCountPlans }}>
      {children}
    </counterDigitalPlansContext.Provider>
  );
};
export default CounterDigitalPlansProvider;