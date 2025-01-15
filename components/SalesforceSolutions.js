import React from "react";

const SalesforceSolutions = ({title, description, cards }) => {
  return (
    <section className="c-choose saleSolution c-choose--salesforce">
      <div className="container">
        <div className="row">
          {cards.slice(0, 2).map((card, index) => (
            <div className="col-lg-3 col-md-6 col-12 order-lg-1  order-2" key={index}>
              <div className="c-choose__flex">
                  <div className="c-choose__card">
                      <div className="c-choose__card__wrap">
                        <figure className="mb-0 c-choose__card__image">
                            <img src={card.icon} alt="icon"/>
                            <figcaption>
                                <p className="c-choose__card__heading mt-4">{card.title}</p>
                            </figcaption>
                        </figure>
                      </div>
                      <p className="c-choose__card__text">{card.desc}</p>
                  </div>
              </div>
            </div>
          ))}
          <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-1">
            <div className="c-choose__SolutionHead">
              <h3 className="c-choose__SolutionHeading">{title}</h3>
              <p className="c-choose__SolutionText">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {cards.slice(2).map((card, index) => (
            <div className="col-lg-3 col-md-6 col-12 order-lg-1  order-2" key={index}>
              <div className="c-choose__flex">
                  <div className="c-choose__card">
                      <div className="c-choose__card__wrap">
                        <figure className="mb-0 c-choose__card__image">
                            <img src={card.icon} alt="icon"/>
                            <figcaption>
                                <p className="c-choose__card__heading mt-4">{card.title}</p>
                            </figcaption>
                        </figure>
                      </div>
                      <p className="c-choose__card__text">{card.desc}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceSolutions;
