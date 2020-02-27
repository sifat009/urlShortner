import React, { createContext, useReducer } from "react";
import { urlReducer } from "../reducers/urlReducer";

export const UrlContext = createContext();

export default function UrlContextProvider(props) {
  const [urls, dispatch] = useReducer(urlReducer, []);
  return (
    <UrlContext.Provider value={{ urls, dispatch }}>
      {props.children}
    </UrlContext.Provider>
  );
}
