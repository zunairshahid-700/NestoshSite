import React from 'react';

const SalesforceExpertise = ({title, description, cards}) => {
  return (
    <section className="c-choose  c-choose--before">
      <div className="container">
        <div className="c-choose__head">
          <h3 className="c-choose__heading">{title}</h3>
           <p className="c-choose__text" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="c-choose__cards">
          <div className="row">
            {cards.map((card, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="c-choose__flex">
                    <div className="c-choose__card">
                        <figure className="mb-0">
                            <img src={card.icon} alt={card.title}/>
                            <figcaption>
                                <p className="c-choose__card__heading">{card.title}</p>
                            </figcaption>
                        </figure>
                        <p className="c-choose__card__text">{card.desc}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesforceExpertise