import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const Solutions = ({blok}) => {
  return (
    <div className="col-lg-3 col-md-6 col-12 order-lg-1 order-2" {...storyblokEditable(blok)}>
      <div className="c-choose__flex">
        <div className="c-choose__card">
          <div className="c-choose__card__wrap">
            <figure className="mb-0 c-choose__card__image">
              <img src={blok.Image?.filename} alt="icon" />
              <figcaption>
                <p className="c-choose__card__heading">
                  {blok.Title}
                </p>
              </figcaption>
            </figure>
            <p className="c-choose__card__text">
              {blok.Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions