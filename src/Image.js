import React from "react";
// props = response.data.photos
export default function Image(props) {
  if (props.images) {
    return (
      <section className="Image row dictionary-wrapper">
        {props.images.map(function (image, index) {
          return (
            <div className="Image col-4" key={index}>
              <a href={image.url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid mb-2 mt-2"
                  src={image.src.landscape}
                  alt={image.alt}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
