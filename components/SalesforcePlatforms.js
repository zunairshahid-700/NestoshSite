import React from "react";

const SalesforcePlatforms = ({ sectionTitle, mainImage, features }) => {
  // Split features into left and right columns
  const leftColumnFeatures = features.filter((_, index) => index % 2 === 0);
  const rightColumnFeatures = features.filter((_, index) => index % 2 !== 0);

  return (
    <section className="c-services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="c-services__head">
              <img
                src={mainImage}
                className="c-services__logo"
                alt="Salesforce"
              />
              <h2 className="c-services__title">{sectionTitle}</h2>
            </div>
          </div>
          <div className="col-12 col-lg-8 c-services__service-col">
            <div className="row w-100">
              <div className="col-12 col-md-6">
                {leftColumnFeatures.map((feature) => (
                  <div key={feature.id} className="c-services__service">
                    <div className="c-services__service__circle">
                      <img
                        src={feature.image}
                        className="c-services__service__image"
                        alt={feature.text}
                      />
                    </div>
                    <p className="c-services__service__text">{feature.text}</p>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-6">
                {rightColumnFeatures.map((feature) => (
                  <div key={feature.id} className="c-services__service">
                    <div className="c-services__service__circle">
                      <img
                        src={feature.image}
                        className="c-services__service__image"
                        alt={feature.text}
                      />
                    </div>
                    <p className="c-services__service__text">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesforcePlatforms;
