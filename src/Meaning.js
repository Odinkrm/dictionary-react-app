import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="Meaning dictionary-wrapper">
      <h3 className="mb-4">
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="mb-2 mt-2 definition" key={index}>
            <ul className=" ps-4">
              <li>
                {definition.definition}
                <br />
                <Example example={definition.example} />
              </li>
            </ul>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
