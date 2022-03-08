import React from "react";
const TeeTimeTableContext = React.createContext({
  golferEmailsMap: {},
});
export default TeeTimeTableContext;
export const TeeTimeTableContextProvider = (props) => {
  const golferEmailsMap = {
    "Tom Vallez": "tvallez@something.com",
    "Tom": "tvallez@something.com",
    "Warren Goldman": "warren@wgoldman.com",
    "Warren": "warren@wgoldman.com",
  };
  localStorage.setItem("golferEmailsMap", golferEmailsMap);
  return (
    <TeeTimeTableContext.Provider value={{ golferEmailsMap: golferEmailsMap }}>
      {props.children}
    </TeeTimeTableContext.Provider>
  );
};
