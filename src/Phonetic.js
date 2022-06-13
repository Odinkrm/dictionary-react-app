import React from "react";

export default function Phonetic(props) {
  function playAudio(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div>
        <a href="/" onClick={playAudio}>
          <i class="fa-solid fa-circle-play"></i>
        </a>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <div>{props.phonetic.text}</div>;
  }
}
