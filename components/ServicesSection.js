import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";
import SectionTitle from "./global/SectionTitle";


const ServicesSection = ({ blok }) => {
  return (
    <section
      className="c-partners c-partners--services"
      {...storyblokEditable(blok)}
    >
      <div className="container">
        <div className="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={blok?.Heading} />
          <p className="c-partners__text">{blok.SubHeading}</p>
        </div>
        <div className="c-partners__cards pb-5">
          <div className="row justify-content-center">
            {blok.Services?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
