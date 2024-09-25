import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const Expertise = ({blok}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12" {...storyblokEditable(blok)}>
    <div className="c-choose__flex">
      <div className="c-choose__card">
        <figure className="mb-0">
          <img src={blok.Image?.filename} alt="certfied" />
          <figcaption>
            <p className="c-choose__card__heading">{blok.Title}</p>
          </figcaption>
        </figure>
        <p className="c-choose__card__text">
            {blok.Description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Expertise