import React, { useState, createContext} from "react";

export const testSheetSetValuesContext = createContext();

const TestSheetSetValuesProvider = ({ children }) => {

const [settingsObject] = useState(JSON.parse(window.localStorage.getItem("settings")));
  
    

// console.log("SETTINGS IN CONTEXT", settingsObject)
    
  return (
    <testSheetSetValuesContext.Provider value={{settingsObject}}>
      {children}
    </testSheetSetValuesContext.Provider>
  );
};
export default TestSheetSetValuesProvider;