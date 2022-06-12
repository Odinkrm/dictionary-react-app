import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms row">
      <ul className="synonyms-list ps-3 col">
        <li>
          <strong>Synonyms:</strong>
        </li>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>- {synonym} </li>;
        })}
      </ul>
    </div>
  );
}
