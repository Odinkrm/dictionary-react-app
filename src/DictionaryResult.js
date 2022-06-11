import React from "react";
import "./App.css";
import Meaning from "./Meaning";
// props=response.data
export default function DictionaryResult(props) {
  if (props.results) {
    return (
      <div className="dictionary-content">
        <h1>{props.results.word}</h1>
        <span>{props.results.phonetic}</span>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
