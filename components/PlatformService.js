import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";
import SectionTitle from "./global/SectionTitle";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";



const PlatformService = ({ blok }) => {
  return (
    <section
      className="c-partners c-partners--services"
      {...storyblokEditable(blok)}
    >
      <div className="container">
        <div className="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={blok?.Heading} />
        </div>
        <div className="c-partners__cards">
          <div className="row">
            {blok.PlatformService?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
        <div className="c-service__bottom">
          <p className="c-service__bottom__text">
            {render(blok.BottomText)}

            <Link href="/contact" passHref>
            <a className="c-service__bottom__text__link">
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
