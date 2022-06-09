import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [dictionaryResult, setDictionaryResult] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setDictionaryResult({
      word: response.data[0].word,
    });
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
        <button type="submit" value="Search">
          Search
        </button>
      </form>
      <div className="dictionary-content">
        <h1>{dictionaryResult.word}</h1>
      </div>
    </div>
  );
}
