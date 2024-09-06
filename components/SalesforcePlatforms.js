import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from "./global/SectionTitle";

const SalesforcePlatforms = ({ blok }) => {
  return (
    <section className="c-services" {...storyblokEditable(blok)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="c-services__head">
              <img
                src={blok.Image.filename}
                className="c-services__logo"
                alt="Salesforce"
              />
              <h2 className="c-services__title">{blok.Heading}</h2>
            </div>
          </div>
          <div className="col-12 col-lg-8 c-services__service-col">
            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="c-services__service">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service1Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service1}</p>
                </div>
                <div className="c-services__service">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service2Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service2}</p>
                </div>
                <div className="c-services__service">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service3Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service3}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="c-services__service">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service4Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service4}</p>
                </div>
                <div className="c-services__service">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service5Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service5}</p>
                </div>
                <div className="c-services__service mb-0">
                  <div className="c-services__service__circle">
                    <img
                      src={blok.Service6Image.filename}
                      className="c-services__service__image"
                      alt="Sales logo"
                    />
                  </div>
                  <p className="c-services__service__text">{blok.Service6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesforcePlatforms;
