import React, { useContext } from "react";
import { UrlContext } from "../contexts/UrlContextProvider";
import Url from "../components/Url";

export default function UrlList() {
  const { urls } = useContext(UrlContext);
  return (
    <div className="url-list">
      {urls.length > 0 && (
        <table className="url-table ui fixed single line celled striped teal table">
          <thead>
            <tr className="url-table-head">
              <th>LongUrl</th>
              <th>ShortUrl</th>
              <th>Total Clicks</th>
            </tr>
          </thead>
          <tbody className="url-table-body">
            {urls.map((url, index) => (
              <Url key={index} url={url} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
