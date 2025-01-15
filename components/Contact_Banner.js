import React from "react";

const Contact_Banner = ({image, title, subTitle}) => {
  return (
    <section className="c-top-banner">
      <div className="c-top-banner__wrap">
        <div className="c-top-banner__wrap__banner">
          <img
            src={image}
            alt="not found"
            className="c-top-banner__wrap__banner__img"
          />
        </div>
        <div className="c-top-banner__wrap__text">
          <h2 className="c-top-banner__wrap__text__heading text-start">{title}</h2>
          <div className="c-top-banner__wrap__text__line"></div>
          <div className="c-top-banner__wrap__text__description">
            <span>{subTitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Banner;
