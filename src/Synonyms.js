import React from "react";

export default function Synonyms(props) {
  console.log(props.synonym);
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms">
        <ul className="synonyms-list ps-3">
          <h4>Synonyms:</h4>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}> {synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
