import React, { useReducer, useContext } from "react";

const DataLayer = React.createContext();

function StateProvider({ children, reducer, initialState }) {
  return (
    <DataLayer.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayer.Provider>
  );
}

export const useData = () => useContext(DataLayer);

export default StateProvider;
