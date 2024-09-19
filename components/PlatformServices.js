import { storyblokEditable } from "@storyblok/react";
import React from "react";

const PlatformServices = ({ blok }) => {
  return (
    <>
      <div class="col-12 col-md-6 col-lg-4" {...storyblokEditable(blok)}>
        <div class="c-partners__card">
          <div class="c-partners__content">
            <div class="c-partners__hover">
              <figure class="c-partners__card__figure">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-partners__card__image"
									dangerouslySetInnerHTML={{ __html: blok.IconPath }}
                >	
                </svg>
                <figcaption class="c-partners__card__title">
                  {blok.Heading}
                </figcaption>
              </figure>
              <p class="c-partners__card__text">{blok.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformServices;
