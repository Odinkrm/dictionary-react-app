import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import DictionaryResult from "./DictionaryResult";
import Image from "./Image";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [dictionaryApiResult, setDictionaryApiResult] = useState(null);
  let [dictionaryImages, setDictionaryImages] = useState(null);

  function handleResponse(response) {
    setDictionaryApiResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setDictionaryImages(response.data.photos);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let pexelsApiKey =
      "563492ad6f9170000100000128c3f9e9738f404fad1e850de3b10e74";
    axios
      .get(pexelsUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="text-center mb-5" onSubmit={search}>
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
      <Image images={dictionaryImages} />
    </div>
  );
}
