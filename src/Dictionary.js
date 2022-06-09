import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="text-center">
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onSubmit={search}
          onChange={handleKeywordChange}
        ></input>
        <button type="submit" value="Search">
          Search
        </button>
      </form>
    </div>
  );
}
