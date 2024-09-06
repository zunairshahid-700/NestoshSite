import React from 'react';
import { storyblokEditable } from "@storyblok/react";

const PartnersDetails = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="c-partners__card">
        <div className="c-partners__hover">
          <figure className="c-partners__card__figure">
            <img
              className="c-partners__card__image"
              src={blok.Image.filename}
              alt={blok.Image.alt || blok.Title}
            />
            <figcaption className="c-partners__card__title">{blok.Title}</figcaption>
          </figure>
          <p className="c-partners__card__text">{blok.Details}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnersDetails