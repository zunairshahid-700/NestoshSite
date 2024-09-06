import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from "./global/SectionTitle";
import Slider from "react-slick";

const Partners = ({ blok }) => {
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
    <section className="c-partners" {...storyblokEditable(blok)}>
      <div className="container">
        <div className="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={blok.Title} />
          <p className="c-partners__text">{blok.SubHeading}</p>
        </div>

        <Slider
          {...settings}
          className="c-partners__cards s-slick js-partners-carousel"
        >
          {blok.Partners?.map((nestedBlok) => (
            <div key={nestedBlok._uid}>
              <StoryblokComponent blok={nestedBlok} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
