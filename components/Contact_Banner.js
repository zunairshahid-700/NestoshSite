import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Contact_Banner = ({blok}) => {
  return (
    <section className="c-top-banner" {...storyblokEditable(blok)}>
      <div className="c-top-banner__wrap">
        <div className="c-top-banner__wrap__banner">
          <img
            src={blok.BackgroundImage.filename}
            alt="not found"
            className="c-top-banner__wrap__banner__img"
          />
        </div>
        <div className="c-top-banner__wrap__text">
          <h2 className="c-top-banner__wrap__text__heading text-start">{blok.Heading}</h2>
          <div className="c-top-banner__wrap__text__line"></div>
          <div className="c-top-banner__wrap__text__description">
            <span>{blok.SubHeading}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Banner;
