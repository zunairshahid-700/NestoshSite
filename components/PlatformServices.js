import Link from "next/link";
import React from "react";

const PlatformServices = ({ service }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="c-partners__card">
          <div className="c-partners__content">
            <div className="c-partners__hover">
              <figure className="c-partners__card__figure">
                {service.iconPath ? (
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-partners__card__image"
                    dangerouslySetInnerHTML={{ __html: service.iconPath }}
                  ></svg>
                ) : (
                  ""
                )}
                {service.url ? (
                  <figcaption>
                    <Link href={service.url} passHref >
                    <a
                      className="c-partners__card__title text-decoration-none d-inline-block"
                    >
                      {service.title}
                    </a>
                    </Link>
                  </figcaption>
                ) : (
                  <figcaption className="c-partners__card__title">
                    {service.title}
                  </figcaption>
                )}
              </figure>
              <p className="c-partners__card__text">{service.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformServices;
