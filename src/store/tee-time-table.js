import React from "react";
const TeeTimeTableContext = React.createContext({
  teeTimeTable: [],
  golferEmailsMap: {},
});
export default TeeTimeTableContext;
export const TeeTimeTableContextProvider = (props) => {
  const teeTimeTable = [];
  const golferEmailsMap = {
    "Tom Vallez": "tvallez@something.com",
    "Tom": "tvallez@something.com",
    "Warren Goldman": "warren@wgoldman.com",
    "Warren": "warren@wgoldman.com",
  };
  localStorage.setItem("teeTimeTable", teeTimeTable);
  localStorage.setItem("golferEmailsMap", golferEmailsMap);
  return (
    <TeeTimeTableContext.Provider value={{ teeTimeTable: teeTimeTable, golferEmailsMap: golferEmailsMap }}>
      {props.children}
    </TeeTimeTableContext.Provider>
  );
};
