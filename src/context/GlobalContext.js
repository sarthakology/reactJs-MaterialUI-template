import React from "react";

const GlobalContext = React.createContext({
  loader: false,
  setLoader: () => {},
});

export default GlobalContext;