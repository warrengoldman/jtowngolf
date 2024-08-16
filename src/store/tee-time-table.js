import React from "react";
const TeeTimeTableContext = React.createContext({
  golferEmailsMap: {},
});
export default TeeTimeTableContext;
export const TeeTimeTableContextProvider = (props) => {
  const golferEmailsMap = {
    "Tom Vallez": "tvallez264@aol.com",
    Tom: "tvallez264@aol.com",
    "Warren Goldman": "warren@wgoldman.com",
    Warren: "warren@wgoldman.com",
    Squeaky: "richpieper80@gmail.com",
    Dick: "rseidenstr@aol.com",
    "Dick Seidenstricker": "rseidenstr@aol.com",
    Leo: "paul@usisales.com",
    Fizz: "joe.dean@shakopeedakota.org",
    Seif: "jseifert@cbiz.com",
    Malz: "ig17loo@aol.com",
    Jim: "patty.huss@state.mn.us",
    "Jim Huss": "patty.huss@state.mn.us",
    Matt: "matt.goldman@yoursix.com",
    Frank: "frankkipp80@gmail.com",
  };
  localStorage.setItem("golferEmailsMap", golferEmailsMap);
  return (
    <TeeTimeTableContext.Provider value={{ golferEmailsMap: golferEmailsMap }}>
      {props.children}
    </TeeTimeTableContext.Provider>
  );
};
