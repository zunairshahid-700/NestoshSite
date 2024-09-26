import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import React from "react";

const PlatformServices = ({ blok }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4" {...storyblokEditable(blok)}>
        <div className="c-partners__card">
          <div className="c-partners__content">
            <div className="c-partners__hover">
              <figure className="c-partners__card__figure">
                {blok.IconPath ? (
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-partners__card__image"
                    dangerouslySetInnerHTML={{ __html: blok.IconPath }}
                  ></svg>
                ) : (
                  ""
                )}
                {blok.url?.cached_url ? (
                  <figcaption>
                    <Link href={blok.url?.cached_url} passHref >
                    <a
                      className="c-partners__card__title text-decoration-none d-inline-block"
                    >
                      {blok.Heading}
                    </a>
                    </Link>
                  </figcaption>
                ) : (
                  <figcaption className="c-partners__card__title">
                    {blok.Heading}
                  </figcaption>
                )}
              </figure>
              <p className="c-partners__card__text">{blok.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformServices;
