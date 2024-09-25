import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import React from 'react';


const SalesforceExpertise = ({blok}) => {
  return (
    <section className="c-choose  c-choose--before" {...storyblokEditable(blok)}>
      <div className="container">
        <div className="c-choose__head">
          <h3 className="c-choose__heading">{blok.Heading}</h3>
          <p className="c-choose__text">
            <a className="c-choose__text__link" href="#">
              Contact us
            </a>
            {blok.SubHeading}
          </p>
        </div>
        <div className="c-choose__cards">
          <div className="row">
            {blok.Expertise?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesforceExpertise