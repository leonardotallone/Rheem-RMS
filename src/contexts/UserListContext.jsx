import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const listUserContext = createContext();

const ListUserProvider = ({ children }) => {
  const [listaDeUsuarios, setListaDeUsuarios] = useState();

  useEffect(() => {
    axios
      .get("http://10.25.14.90:3001/users/findAllUsers")
      .then((response) => setListaDeUsuarios(response.data))
      .catch((error) => { 
        console.error('Error al obtener datos:', error);
   });
  }, []);

  return (
    <listUserContext.Provider value={{ listaDeUsuarios, setListaDeUsuarios }}>
      {children}
    </listUserContext.Provider>
  );
};
export default ListUserProvider;
