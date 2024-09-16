import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";
import SectionTitle from "./global/SectionTitle";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";



const PlatformService = ({ blok }) => {
  return (
    <section
      class="c-partners c-partners--services"
      {...storyblokEditable(blok)}
    >
      <div class="container">
        <div class="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={blok?.Heading} />
        </div>
        <div class="c-partners__cards">
          <div class="row">
            {blok.PlatformService?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
        <div class="c-service__bottom">
          <p class="c-service__bottom__text">
            {render(blok.BottomText)}

            <Link href="/contact" passHref>
            <a class="c-service__bottom__text__link">
              Contact us
            </a>
            </Link>

            {render(blok.BottomText2)}
          </p>

        </div>
      </div>
    </section>
  );
};

export default PlatformService;
