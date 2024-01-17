import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const createNewBatchContext = createContext();

const CreateNewBatchProvider = ({ children }) => {
  const [newBatch, setNewBatch] = useState();
  const [newBatchSuccess, setNewBatchSuccess] = useState('');
  const [newBatchError, setNewBatchError] = useState('');

  // console.log("New Batch in Context", newBatch)

  useEffect(() => {
    if (newBatch) {
      axios
        .post("http://10.25.14.90:3001/lotes/crearLote", newBatch)
        .then((response) => {
          console.log("LOTE CREADO EXITOSAMENTE", response.data)
          setNewBatchSuccess('Lote creado exitosamente')
        })
        .catch((error) => {
            setNewBatchError('Error al crear Lote')
          console.error("Error al crear nuevo Lote:", error.message);
        });
    }
  }, [newBatch]);

  return (
    <createNewBatchContext.Provider value={{ setNewBatch, newBatchSuccess, newBatchError }}>
      {children}
    </createNewBatchContext.Provider>
  );
};
export default CreateNewBatchProvider;