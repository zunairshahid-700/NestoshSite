import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";
import SectionTitle from "./global/SectionTitle";


const ServicesSection = ({ blok }) => {
  return (
    <section
      class="c-partners c-partners--services"
      {...storyblokEditable(blok)}
    >
      <div class="container">
        <div class="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={blok?.Heading} />
          <p class="c-partners__text">{blok.SubHeading}</p>
        </div>
        <div class="c-partners__cards pb-5">
          <div class="row justify-content-center">
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
