import React, {createContext } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
// const [estado, setEstado] = useState();

  const user = {
    name: "Leonardo",
    lastName: "Tallone",
  };

  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  ) 
};
export default UserProvider;
