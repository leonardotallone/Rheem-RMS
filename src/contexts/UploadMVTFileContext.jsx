import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const uploadMVTFileContext = createContext();

const UploadMvtFileProvider = ({ children }) => {
    const [mvtPetitionId, setMvtPetitionId] = useState();
    const [mvtFile, setMvtFile] = useState();
    const [uploadMvtSuccess, setUploadMvtSuccess] = useState('');
    const [uploadMvtError, setUploadMvtError] = useState('');

//  console.log("ID", mvtPetitionId)
console.log("MVT File context", mvtFile)

  useEffect(() => {
    if(mvtPetitionId && mvtFile){
    axios
      .patch(`http://10.25.14.90:3001/petition-mvt/fileMVT/${mvtPetitionId}`,mvtFile)
      .then((response) => {
      console.log("RESPUESTA", response.data)
      setUploadMvtSuccess("Informe MVT cargado Exitosamente!")
    })
      .catch((error)  => {
        console.error("Error al cargar Informe MVT", error.message);
        setUploadMvtError("Error al cargar Informe MVT")
      });
    }
  }, [mvtPetitionId, setUploadMvtSuccess, setUploadMvtError]);


  return (
    <uploadMVTFileContext.Provider value={{setMvtPetitionId, setMvtFile, uploadMvtSuccess, uploadMvtError }}>
      {children}
    </uploadMVTFileContext.Provider>
  );
};
export default UploadMvtFileProvider;