import React from "react";
import "./App.css";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
// props=response.data
export default function DictionaryResult(props) {
  if (props.results) {
    return (
      <div className="dictionary-content">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
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
