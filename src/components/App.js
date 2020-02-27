import React from "react";
import UrlList from "./UrlList";
import UrlContextProvider from "../contexts/UrlContextProvider";
import UrlForm from "./UrlForm";

function App() {
  return (
    <div className="App ui container">
      <UrlContextProvider>
        <UrlForm />
        <UrlList />
      </UrlContextProvider>
    </div>
  );
}

export default App;
