import React, { useContext, useState } from "react";
import { UrlContext } from "../contexts/UrlContextProvider";
import { addUrl } from "../action";

export default function UrlForm() {
  const { dispatch } = useContext(UrlContext);
  const [urlValue, setUrlValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addUrl({ longUrl: urlValue }));
  };

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline field">
          <input
            value={urlValue}
            type="text"
            placeholder="Insert Url.."
            onChange={e => setUrlValue(e.target.value)}
          />
          <button className="ui teal button">Shorten URL</button>
        </div>
      </form>
    </div>
  );
}
