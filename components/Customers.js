import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const Customers = ({blok}) => {
  return (
      <section className="c-portfolio" {...storyblokEditable(blok)}>
        <div className="container">
            <SectionTitle cssClass="c-portfolio__heading" title={blok.Title}/>
        </div>
        <div className="c-portfolio__logos">
          {blok.Client.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
    </section>
  )
}

export default Customers