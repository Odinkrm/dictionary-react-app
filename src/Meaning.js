import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <ul className="mb-2 mt-2 ps-4">
                <li>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
