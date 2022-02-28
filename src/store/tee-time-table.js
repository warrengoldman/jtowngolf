import React from 'react';
const TeeTimeTableContext = React.createContext({ 
  teeTimeTable: []
});
export default TeeTimeTableContext;
export const TeeTimeTableContextProvider = (props) => {
  const teeTimeTable = ["zerooffsetjunk", "3:27", "3:36", "3:45"];
  localStorage.setItem("teeTimeTable", teeTimeTable);
  return <TeeTimeTableContext.Provider value={{teeTimeTable: teeTimeTable}}>{props.children}</TeeTimeTableContext.Provider>
}