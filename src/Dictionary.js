import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import DictionaryResult from "./DictionaryResult";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [dictionaryApiResult, setDictionaryApiResult] = useState(null);

  function handleResponse(response) {
    setDictionaryApiResult(response.data[0]);
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
      <DictionaryResult results={dictionaryApiResult} />
    </div>
  );
}
