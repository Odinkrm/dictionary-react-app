import React from "react";

export default function Example(props) {
  if (props.example) {
    return <p className="text-muted">"{props.example}"</p>;
  } else {
    return null;
  }
}
