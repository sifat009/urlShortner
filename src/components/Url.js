import React from "react";

export default function Url(props) {
  const { longUrl, shortUrl, count } = props.url;
  return (
    <tr>
      <td>{longUrl}</td>
      <td>{shortUrl}</td>
      <td>{count}</td>
    </tr>
  );
}
