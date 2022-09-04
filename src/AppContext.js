import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [currColor, setCurrColor] = useState("white");

  const colores = [
    { color: "red" },
    { color: "orange" },
    { color: "yellow" },
    { color: "green" },
    { color: "cyan" },
    { color: "blue" },
    { color: "purple" },
    { color: "grey" },
    { color: "black" },
    { color: "white" },
    { color: "brown" }
  ];

  const columns = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" }
  ];

  const rows = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" }
  ];

  return (
    <AppContext.Provider
      value={{
        currColor,
        setCurrColor,
        colores,
        columns,
        rows
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
