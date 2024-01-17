import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const petitionMVTContext = createContext();

const PetitionMVTProvider = ({ children }) => {
  const [petitionMVT, setpetitionMVT] = useState();
  const [petitioMVTSuccess, setPetitionMVTSuccess] = useState('');
  const [petitionMVTError, setPetitionMVTError] = useState('');


//  console.log("SOLICITUD MVT CONTEXT",petitionMVT )

  useEffect(() => {
    if (petitionMVT) {
      axios
        .post("http://10.25.14.90:3001/petition-mvt/create-petition", petitionMVT)
        .then((response) => {
          console.log("Petition MVT Creada Exitosamente", response.data)
          setPetitionMVTSuccess('Peticion MVT Creada Exitosamente')
        })
        .catch((error) => {
            setPetitionMVTError('Error al crear peticion MVT')
          console.error("Error al crear Peticion MVT ", error.message);
        });
    }
  }, [petitionMVT, setPetitionMVTSuccess, setPetitionMVTError]);

  return (
    <petitionMVTContext.Provider value={{ setpetitionMVT, petitioMVTSuccess, petitionMVTError }}>
      {children}
    </petitionMVTContext.Provider>
  );
};
export default PetitionMVTProvider;
