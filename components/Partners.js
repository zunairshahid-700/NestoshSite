import React from "react";
import SectionTitle from "./global/SectionTitle";
import Slider from "react-slick";

const Partners = ({ title, subtitle, partners}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
  ]
  };

  return (
    <section className="c-partners" >
      <div className="container">
        <div className="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={title} />
          <p className="c-partners__text">{subtitle}</p>
        </div>

        <Slider
          {...settings}
          className="c-partners__cards s-slick js-partners-carousel"
        >
          {partners?.map((partner) => (
            <div className="c-partners__card"  key={partner.id}>
              <div className="c-partners__hover">
              <figure className="c-partners__card__figure">
                <img className="c-partners__card__image" src={partner.icon} alt={partner.title}/>
                <figcaption className="c-partners__card__title">{partner.title}</figcaption>
              </figure><p className="c-partners__card__text">{partner.desc}</p>
              </div>
              </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
