import React, { useState, createContext} from "react";

export const testSheetContext = createContext();

const TestSheetProvider = ({ children }) => {

    const [M1] = useState(JSON.parse(window.localStorage.getItem("test1")));
    const [M2] = useState(JSON.parse(window.localStorage.getItem("test2")));
    const [M3] = useState(JSON.parse(window.localStorage.getItem("test3")));
    const [M4] = useState(JSON.parse(window.localStorage.getItem("test4")));
    const [M5] = useState(JSON.parse(window.localStorage.getItem("test5")));
    const [M6] = useState(JSON.parse(window.localStorage.getItem("test6")));
    const [M7] = useState(JSON.parse(window.localStorage.getItem("test7")));
    const [M8] = useState(JSON.parse(window.localStorage.getItem("test8")));
    
  return (
    <testSheetContext.Provider value={{M1,M2,M3,M4,M5,M6,M7,M8}}>
      {children}
    </testSheetContext.Provider>
  );
};
export default TestSheetProvider;

