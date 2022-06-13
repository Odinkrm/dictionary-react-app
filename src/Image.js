import React from "react";
// props = response.data.photos
export default function Image(props) {
  if (props.images) {
    return (
      <section className="Image row">
        {props.images.map(function (image, index) {
          return (
            <div className="col-4" key={index}>
              <a href={image.url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid"
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
