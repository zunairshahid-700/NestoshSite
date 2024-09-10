import React from 'react';
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';
import { render } from 'storyblok-rich-text-react-renderer';

const WhoWeAre = ({blok}) => {
  return (
      <section className="c-about" {...storyblokEditable(blok)}>
        <div className="container">
          <div className="c-about__inner">
            <SectionTitle cssClass="c-about__title" title={blok.Title} />
            <p className="c-about__text">{render(blok.SubHeading)}</p>
          </div>
        </div>
      </section>
  );
}

export default WhoWeAre