import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import React from "react";

const PlatformsSectionsContent = ({ blok, count }) => {
  const UrlObject = blok.URL?.cached_url
    ? { pathname: blok.URL?.cached_url }
    : { pathname: "/default-page" };

  const techClass =
    count > 1 ? "c-content__tech c-content__tech--margin-t" : "c-content__tech";

  const isEven = count % 2 === 0;

  return (
    <div className={techClass} {...storyblokEditable(blok)}>
      <div className="row c-content__tech__align">
        {isEven ? (
          <>
            {/* Image first when count is even */}
            <div className="col-lg-6">
              <figure className="mb-0 wow c-content__tech__align__left animate__animated animate__slideInLeft">
                <img
                  src={blok.Image?.filename}
                  alt="platform-image"
                  className="c-content__tech__align__img"
                />
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="c-content__tech__align__description wow animate__animated animate__slideInRight">
                <h4 className="c-content__tech__align__description__heading">
                  {blok.Heading}
                </h4>
                <p className="c-content__tech__align__description__text">
                  {blok.Description}
                </p>

                <Link href={UrlObject} passHref>
                  <a className="btn btn-primary">Read More</a>
                </Link>

                <p className="c-content__tech__align__description__number">
                  0{count}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Description first when count is odd */}
            <div className="col-lg-6">
              <div className="c-content__tech__align__description wow animate__animated animate__slideInLeft">
                <h4 className="c-content__tech__align__description__heading">
                  {blok.Heading}
                </h4>
                <p className="c-content__tech__align__description__text">
                  {blok.Description}
                </p>

                <Link href={UrlObject} passHref>
                  <a className="btn btn-primary">Read More</a>
                </Link>

                <p className="c-content__tech__align__description__number">
                  0{count}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="mb-0 wow c-content__tech__align__left animate__animated animate__slideInRight">
                <img
                  src={blok.Image?.filename}
                  alt="platform-image"
                  className="c-content__tech__align__img"
                />
              </figure>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlatformsSectionsContent;
