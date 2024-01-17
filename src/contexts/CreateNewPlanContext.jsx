import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const createNewPlanContext = createContext();

const CreateNewPlanProvider = ({ children }) => {
  const [newPlan, setNewPlan] = useState();
  const [newPlanSuccess, setNewPlanSuccess] = useState('');
  const [newPlanError, setNewPlanError] = useState('');



  useEffect(() => {
    if (newPlan) {
      axios
        .post("http://10.25.14.90:3001/planes/createPlan", newPlan)
        .then((response) => {
          console.log("PLAN CREADO EXITOSAMENTE", response.data)
          setNewPlanSuccess('Plan creado exitosamente')
        })
        .catch((error) => {
          setNewPlanError('Error al crear plan')
          console.error("Error al crear nuevo Plan:", error.message);
        });
    }
  }, [newPlan]);

  return (
    <createNewPlanContext.Provider value={{ setNewPlan, newPlanError, newPlanSuccess }}>
      {children}
    </createNewPlanContext.Provider>
  );
};
export default CreateNewPlanProvider;