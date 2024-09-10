import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const HeroSection = ({ blok }) => {
  return (
    <section className="c-main-banner" {...storyblokEditable(blok)}>
      <div className="container c-main-banner__container">
        <div className="row">
          <div className="col-12">
            <div className="c-main-banner__wrap">
              <div className="c-main-banner__image">
                <img
                  src={blok.DesktopBackgroundImage.filename}
                  alt="main banner"
                  className="c-main-banner__image__src d-none d-lg-block"
                />
                <img
                  className="c-main-banner__image__src d-lg-none"
                  src={blok.MobileBackgroundImage.filename}
                  alt="mobile banner"
                />
              </div>
              <div className="c-main-banner__content">
                <div className="c-main-banner__content__left text-left">
                  <h1 className="c-main-banner__heading">{blok.MainHeading}</h1>
                  <p className="c-main-banner__text">{blok.SubHeading}</p>
                </div>
                <div className="c-main-banner__content__right">
                  <div className="c-main-banner__info">
                    <p className="c-main-banner__info__text pe-lg-2 me-lg-1">
                      <span className="c-main-banner__info__count colorPrimary">
                        100+
                      </span>
                      employees
                    </p>
                    <p className="c-main-banner__info__text">
                      working with
                      <span className="c-main-banner__info__count colorSecondary">
                        200+
                      </span>
                      brands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
