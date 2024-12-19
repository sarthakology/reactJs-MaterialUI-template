import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper({ children }) {
  const [loader, setLoader] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loader,
        setLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}